require('dotenv').config();
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(express.json());
var cors = require('cors');
app.use(cors());

const escapeString = value => value.replace(/'/g, "\\'");

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

// MySQL connection setup
var con = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost', 
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Aab1182002', 
    database: process.env.DB_NAME || 'CS_4485',
    waitForConnections: true,
});

let signedInUsername = ''; // Keeps track of the username from the sign-in
let signedInUserID = '';

// Starting the server
var server = app.listen(3305, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server started at http://localhost" + ":" + port);
});

// Connect to MySQL
con.connect(function(error){
    if(error) console.log(error);
    else console.log("Connected to the database");
});

app.post('/signin', (req, res) => {
    const { Username, Password } = req.body;
    console.log("Request body: ", req.body);

    if (!Username || !Password) {
        console.log('Checking username and password');
        return res.status(400).send({ message: 'Username and password are required' });
    }

    con.query('SELECT * FROM users WHERE Username = ? AND Password = ?', [Username, Password], (error, results, fields) => {
        if (error) {
            console.error('Error fetching user:', error);
            return res.status(500).json({ error: 'Error fetching the user' });
        }
        console.log('Fetched results: ', results);
        
        if (results.length > 0) {
            // Assuming that username is unique and the query would return only one result
            const user = results[0];
            signedInUsername = Username;
            console.log('Username: ', signedInUsername);
            res.status(201).json({ message: 'User Fetched Successfully', user });
        } else {
            // No matching user found
            res.status(404).json({ message: 'Invalid username or password' });
        }
    });
});

app.post('/register', async (req, res) => {
    console.log('Recieved Request Body:', req.body);
    const { Username, Password, Email } = req.body;
    // First, check if the user already exists
    const checkUserQuery = 'SELECT * FROM users WHERE Email = ?';
    con.query(checkUserQuery, [Email], (checkError, existingUsers) => {
        if (checkError) {
            console.error('Error checking user:', checkError);
            return res.status(500).json({ error: 'Error checking user' });
        }
        if (existingUsers.length > 0) {
            // User already exists
            return res.status(400).json({ error: 'User already exists' });
        }

        // If user does not exist, insert new user into the database
        const insertUserQuery = 'INSERT INTO users (Username, Password, Email) VALUES (?, ?, ?)';
        con.query(insertUserQuery, [Username, Password, Email], (insertError, result) => {
            if (insertError) {
                console.error('Error registering user:', insertError);
                return res.status(500).json({ error: 'Error registering user' });
            }
            console.log('INSERT RESULT:', result);
            // Assuming `Username` is unique or an auto-incremented ID, you might want to return it or another identifier
            res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
        });
    });
});

app.post('/reset-password', (req, res) => {
    const { username, newPassword } = req.body;
    console.log(req.body);
    // Input validation (in a real app, you'd also want to hash the password before storing it)
    if (!username || !newPassword) {
        return res.status(400).send({ message: 'Username and new password are required' });
    }
    
        // SQL query to update the user's password
    const query = 'UPDATE users SET password = ? WHERE username = ?';
    con.query(query, [newPassword, username], (error, results) => {
        if (error) {
            console.error('Error updating the database:', error);
            return res.status(500).send({ error: 'Error updating the database' });
        }
    
        if (results.affectedRows > 0) {
            res.send({ message: 'Password reset successful' });
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    });
});

// Create Profile Server Code
app.post('/saveProfile', async (req, res) => {
    console.log('Recieved Request Body:', req.body);
    const profile = { 
        Name: req.body.Name,
        Grade: req.body.Grade,
        Gender: req.body.Gender,
        University: req.body.University,
        MoveDate: req.body['Move Date'],
        LeaseDuration: req.body['Lease Duration'],
        HousingType:req.body['Housing Type'],
        Locality: req.body.Locality,
        RoomType: req.body['Room type'],
        Budget: req.body.Budget,
        Smoking: req.body.Smoking ? "Yes" : "No",
        Drinking: req.body.Drinking ? "Yes" : "No",
        Pets: req.body.Pets ? "Yes" : "No",
        Email: req.body.Email
        
    };
    const insertQuery = 'INSERT INTO profiles (Name, Grade, Gender, University, `Move Date`, `Lease Duration`, `Housing Type`, Locality, `Room Type`, Budget, Smoking, Drinking, Pets, Email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [profile.Name, profile.Grade, profile.Gender, profile.University, profile.MoveDate, profile.LeaseDuration, profile.HousingType, profile.Locality, profile.RoomType, profile.Budget, profile.Smoking, profile.Drinking, profile.Pets, profile.Email];

    con.query(insertQuery, values, (error, result) => {
        if (error) {
            console.log('Error saving profile:', error);
            return res.status(500).json({error: 'Error saving profile'});
        }
        console.log('INSERT RESULT:', result);
        res.status(201).json({message: 'Profile saved successfully', ProfileId: result.insertId});
    });
});

/*
function calculateSimilarityScore(userPreferences, potentialMatch) {
    let score = 0;
    const totalCriteria = 11;
    const scorePerCriteria = 100 / totalCriteria;

    // Compare each criterion
    if (userPreferences.roomType === potentialMatch.roomType || userPreferences.roomType === "No Preference") score += scorePerCriteria;
    if (userPreferences.gender === potentialMatch.gender) score += scorePerCriteria;
    if (userPreferences.housingType === potentialMatch.housingType || userPreferences.housingType === "No Preference") score += scorePerCriteria;
    if (userPreferences.locality === potentialMatch.locality || userPreferences.locality === "No Preference") score += scorePerCriteria;
    if (userPreferences.university === potentialMatch.university) score += scorePerCriteria;
    if (userPreferences.smoking === potentialMatch.smoking) score += scorePerCriteria;
    if (userPreferences.drinking === potentialMatch.drinking) score += scorePerCriteria;
    if (userPreferences.pets === potentialMatch.pets) score += scorePerCriteria;

    // Handling numerical values like budget with a range
    const budgetDifference = Math.abs(userPreferences.budget - potentialMatch.budget);
    if (budgetDifference <= 500) score += scorePerCriteria; // Assuming a tolerance of 500

    // Handling dates (e.g., moveDate) with a tolerance
    const moveDateUser = new Date(userPreferences.moveDate);
    const moveDateMatch = new Date(potentialMatch.moveDate);
    const dayDifference = Math.abs(moveDateUser - moveDateMatch) / (1000 * 60 * 60 * 24);
    if (dayDifference <= 30) score += scorePerCriteria; // Assuming a 30-day tolerance

    // Handling lease duration as a direct match or within a tolerance
    if (userPreferences.leaseDuration === potentialMatch.leaseDuration) score += scorePerCriteria;

    return score;
}
*/
//////////////////// WORKING 
/*
app.post('/submit-preferences', async (req, res) => {
    // Extract preferences from the request body
    const preferences = {
        moveDate: req.body['Move Date'] || null,
        budget: req.body.Budget || 0,
        roomType: req.body['Room type'],
        leaseDuration: req.body['Lease Duration'],
        housingType: req.body['Housing Type'],
        locality: req.body.Locality,
        university: req.body.University || 'No Preference',
        gender: req.body.Gender,
        smoking: req.body.Smoking ? "Yes" : "No", // Convert boolean to Yes/No
        drinking: req.body.Drinking ? "Yes" : "No", // Convert boolean to Yes/No
        pets: req.body.Pets ? "Yes" : "No", // Convert boolean to Yes/No
    };

    let formattedMoveDate = null;
    if (preferences.moveDate && preferences.moveDate.includes('/')) {
        const moveDateParts = preferences.moveDate.split('/');
        if (moveDateParts.length === 3) {
            const year = parseInt(moveDateParts[2], 10) + 2000; // Adjusting 'YY' to 'YYYY'
            const month = moveDateParts[0].padStart(2, '0'); // Ensuring two digits
            const day = moveDateParts[1].padStart(2, '0'); // Ensuring two digits
            formattedMoveDate = `${year}-${month}-${day}`; // 'YYYY-MM-DD'
        }
    }

    ///////////

    // First, insert the preferences into the database
    const insertPreferencesQuery = `
        INSERT INTO preferences 
        (MoveDate, Budget, RoomType, LeaseDuration, HousingType, Locality, University, Gender, Smoking, Drinking, Pets)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        ;

    // Assuming a default value for budget if left blank or invalid
    const formattedBudget = preferences.budget && !isNaN(parseFloat(preferences.budget)) ? parseFloat(preferences.budget) : 'No Preference';

    const values = [
        formattedMoveDate, // Handling 'No Preference' as null for SQL date
        formattedBudget,
        preferences.roomType,
        preferences.leaseDuration,
        preferences.housingType,
        preferences.locality,
        preferences.university,
        preferences.gender,
        preferences.smoking,
        preferences.drinking,
        preferences.pets,
    ];

    con.query(insertPreferencesQuery, values, (error, insertResult) => {
        if (error) {
            console.error('Error inserting preferences into the database:', error);
            //return res.status(500).send({ error: 'Error inserting preferences into the database' });
        }
        console.log('INSERT RESULT:', insertResult);
        //res.status(201).json({message: 'Preferences submitted'});
    });
    
    // Ensure strings are properly escaped to prevent SQL injection
    const escapeString = value => value.replace(/'/g, "\\'");

    // Construct the SQL query dynamically based on the preferences
    let query = 'SELECT Name, Grade, University FROM project_data WHERE 1=1';
    if (preferences.roomType && preferences.roomType !== "No Preference") {
        query += ` AND \`Room type\` = '${preferences.roomType}'`;
    }
    if (preferences.gender && preferences.gender !== "No Preference") {
        query += ` AND Gender = '${preferences.gender}'`;
    }
    if (preferences.housingType && preferences.housingType !== "No Preference") {
        query += ` AND \`Housing Type\` = '${preferences.housingType}'`;
    }
    if (preferences.locality && preferences.locality !== "No Preference") {
        query += ` AND Locality = '${preferences.locality}'`;
    }
    if (preferences.pets && preferences.pets !== "No Preference") {
        query += ` AND Pets = '${preferences.pets}'`;
    }
    if (preferences.leaseDuration && preferences.leaseDuration !== "No Preference") {
        query += ` AND \`Lease Duration\` = '${preferences.leaseDuration}'`;
    }
    if (preferences.smoking && preferences.smoking !== "No Preference")
    {
        query += ` AND Smoking = '${preferences.smoking}'`;
    }
    if (preferences.drinking && preferences.drinking !== "No Preference") {
        query += ` AND Drinking = '${preferences.drinking}'`;
    }
    if (preferences.budget && preferences.budget.trim() !== '') {
        query += ` AND Budget <= ${parseInt(preferences.budget, 10)}`;
    }
    if (preferences.moveDate && preferences.moveDate.trim() !== '') {
        query += ` AND STR_TO_DATE(\`Move Date\`, '%m/%d/%y') BETWEEN DATE_SUB(STR_TO_DATE('${preferences.moveDate}', '%m/%d/%y'), INTERVAL 7 DAY) AND DATE_ADD(STR_TO_DATE('${preferences.moveDate}', '%m/%d/%y'), INTERVAL 7 DAY)`;
    }
    if (preferences.university && preferences.university.trim() !== '') {
        query += ` AND University = '${escapeString(preferences.university)}'`;
    }

    // Execute the query
    con.query(query, (error, results) => {
        if (error) {
            console.error('Error querying the database:', error);
            return res.status(500).send({ error: 'Error querying the database' });
        }

        if (results.length > 0) {
            res.json({ message: 'Matching users found', matches: results });
        } 
        else {
            res.status(404).send({ message: 'No matching users found' });
            /*
            // If no direct matches found, attempt to find similar matches
            const similarityQuery = `SELECT * FROM project_data`; // Adjust as necessary
            con.query(similarityQuery, (similarityError, allPotentialMatches) => {
                if (similarityError) {
                    console.error('Error querying the database for similarity check:', similarityError);
                    return res.status(500).send({ error: 'Error querying the database' });
                }
    
                // Calculate similarity scores for all potential matches
                const scoredMatches = allPotentialMatches.map(match => ({
                    ...match,
                    similarityScore: calculateSimilarityScore(preferences, match) // Define this function
                })).filter(match => match.similarityScore >= 70 && match.similarityScore < 100)
                    .sort((a, b) => b.similarityScore - a.similarityScore);
    
                if (scoredMatches.length > 0) {
                    // Return top similar matches based on the score
                    res.json({ message: 'Potential matches found based on similarity score', matches: scoredMatches.slice(0, 3) });
                } else {
                    res.status(404).send({ message: 'No similar users found' });
                }
            });

        }
    });
});
*/

app.post('/submit-preferences', async (req, res) => {
    // 1. Extract preferences from the request body
    const preferences = {
        username: req.body.Username,
        moveDate: req.body.MoveDate,
        budget: req.body.Budget || 0,
        roomType: req.body.RoomType,
        leaseDuration: req.body.LeaseDuration,
        housingType: req.body.HousingType,
        locality: req.body.Locality,
        university: req.body.University || 'No Preference',
        gender: req.body.Gender,
        smoking: req.body.Smoking ? "Yes" : "No", // Convert boolean to Yes/No
        drinking: req.body.Drinking ? "Yes" : "No", // Convert boolean to Yes/No
        pets: req.body.Pets ? "Yes" : "No", // Convert boolean to Yes/No
     };

    // 4. Ensure budget is a valid number or set to 'No Preference'
    const formattedBudget = preferences.budget && !isNaN(parseFloat(preferences.budget)) ? parseFloat(preferences.budget) : 'No Preference';

    // First, insert the preferences into the database
    const insertPreferencesQuery = `
        INSERT INTO preferences 
        (Username, MoveDate, Budget, RoomType, LeaseDuration, HousingType, Locality, University, Gender, Smoking, Drinking, Pets)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        ;

    // 5. Prepare the values for the SQL query
    const values = [
        preferences.username,
        preferences.moveDate, // Handling 'No Preference' as null for SQL date
        formattedBudget,
        preferences.roomType,
        preferences.leaseDuration,
        preferences.housingType,
        preferences.locality,
        preferences.university,
        preferences.gender,
        preferences.smoking,
        preferences.drinking,
        preferences.pets,
    ];

    con.query(insertPreferencesQuery, values, (error, insertResult) => {
        if (error) {
            console.error('Error inserting preferences into the database:', error);
            //return res.status(500).send({ error: 'Error inserting preferences into the database' });
        }
    });

    // // Step to exclude user's own profile from the results
    // const excludeSelfQuery = 'SELECT Name FROM profiles WHERE Username = ?';
    // con.query(excludeSelfQuery, [signedInUsername], (err, result) => {
    //     if (err || result.length === 0) {
    //         console.error('Error or user not found:', err);
    //         return res.status(500).send({error: 'Error fetching user or user not found'});
    //     }

    //     const userFullName = result[0].Name;
    
    // 7. Construct the SQL query dynamically based on the preferences
    let query = 'SELECT Name, Grade, University FROM profiles WHERE 1=1';
    //console.log('INSERT RESULT: ', signedInUsername);
    if(preferences.username)
    {
        query += ` AND LOWER(Username) != LOWER('${preferences.username}')`;
    }
    if (preferences.smoking && preferences.smoking !== "No Preference") {
        query += ` AND Smoking = '${preferences.smoking}'`;
    }
    if (preferences.drinking && preferences.drinking !== "No Preference") {
        query += ` AND Drinking = '${preferences.drinking}'`;
    }
    if (preferences.pets && preferences.pets !== "No Preference") {
        query += ` AND Pets = '${preferences.pets}'`;
    }
    if (preferences.roomType && preferences.roomType !== "No Preference") {
        query += ` AND RoomType  = '${preferences.roomType}'`;
    }
    if (preferences.gender && preferences.gender !== "No Preference") {
        query += ` AND Gender = '${preferences.gender}'`;
    }
    if (preferences.housingType && preferences.housingType !== "No Preference") {
        query += ` AND HousingType = '${preferences.housingType}'`;
    }
    if (preferences.locality && preferences.locality !== "No Preference") {
        query += ` AND Locality = '${preferences.locality}'`;
    }
    if (preferences.leaseDuration && preferences.leaseDuration !== "No Preference") {
        query += ` AND LeaseDuration = '${preferences.leaseDuration}'`;
    }
    if (preferences.budget && preferences.budget !== '') {
        query += ` AND Budget <= ${parseInt(preferences.budget, 10)}`;
    } 
    if (preferences.moveDate && preferences.moveDate.trim() !== '') {
        query += ` AND STR_TO_DATE(MoveDate, '%m/%d/%y') BETWEEN DATE_SUB(STR_TO_DATE('${preferences.moveDate}', '%m/%d/%y'), INTERVAL 7 DAY) AND DATE_ADD(STR_TO_DATE('${preferences.moveDate}', '%m/%d/%y'), INTERVAL 7 DAY)`;
        //query += ` AND STR_TO_DATE(\`Move Date\`, '%m/%d/%y') BETWEEN DATE_SUB(STR_TO_DATE('${preferences.moveDate}'
    }
    if (preferences.university && preferences.university.trim() !== '') {
        query += ` AND University = '${escapeString(preferences.university)}'`;
    } else {
        query += ` AND (University = '' OR University = 'No Preference')`;
    }

    // 8. Execute the query to find matching users
    con.query(query, (error, results) => {
        if (error) {
            console.error('Error querying the database:', error);
            return res.status(500).send({ error: 'Error querying the database' });
        }
 
        if (results.length > 0) {
            // Calculate the percentage match for each result
            const filteredResults = results.filter(result => result.Username !== preferences.username);

            const matches = filteredResults.map((result) => ({
                ...result,
                matchPercentage: calculateMatchPercentage(result, preferences),
            }));
 
            // Sort the matches by match percentage in descending order
            matches.sort((a, b) => b.matchPercentage - a.matchPercentage);
            return res.json({ message: 'Matching users found', results });
        } 
        else {
            const potentialMatchesQuery = `
            SELECT Name, Grade, University, RoomType, LeaseDuration, HousingType, Locality, Smoking, Drinking, Pets, Gender, Budget, MoveDate
            FROM profiles
            WHERE Username != ?
        `;
            // // Fetch all potential matches
            // con.query('SELECT Username, Name, Grade, University, RoomType, LeaseDuration, HousingType, Locality, Smoking, Drinking, Pets, Gender, Budget, MoveDate FROM profiles', (error, potentialMatches) => {
            //     if (error) {
            //         console.error('Error querying the database for potential matches:', error);
            //         return res.status(500).send({ error: 'Error querying the database' });
            //     }

            con.query(potentialMatchesQuery, [preferences.username], (error, potentialMatches) => {
                if (error) {
                    console.error('Error querying the database for potential matches:', error);
                    return res.status(500).send({ error: 'Error querying the database' });
                }
                
                // Calculate similarity scores for potential matches
                const matchesWithScores = potentialMatches.map(match => ({
                    ...match,
                    similarityScore: calculateSimilarityScore(match, preferences),
                }));

                // Filter and sort matches based on similarity score
                const similarMatches = matchesWithScores
                    .filter(match => match.similarityScore >= 70 && match.similarityScore < 101)
                    .sort((a, b) => b.similarityScore - a.similarityScore);
                
                if (similarMatches.length > 0) {
                    const user1NameQuery = 'SELECT Name FROM project_data WHERE Username = ? LIMIT 1'; // Adjust table/column names as necessary
                    con.query(user1NameQuery, [preferences.username], (err, user1Results) => {
                        if (err || user1Results.length === 0) {
                            console.error('Error fetching User1 Name:', err);
                            return res.status(500).send({ error: 'User1 Name not found' });
                        }
                
                        const user1Name = user1Results[0].Name; // Assuming the name is stored in the 'Name' column
            
                        // Insert each similar match into the 'matches' table with User1Name
                        similarMatches.forEach(match => {
                            const insertMatchQuery = `
                                INSERT INTO matches 
                                (User1Name, User2Name, User2Grade, User2Gender, User2University, User2MoveDate, User2LeaseDuration, 
                                User2HousingType, User2Locality, User2RoomType, User2Budget, User2Smoking, User2Drinking, User2Pets, SimilarityScore)
                                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            
                            const matchValues = [
                                user1Name, // Use the retrieved user1Name here
                                match.Name,
                                match.Grade, match.Gender, match.University, match.MoveDate,
                                match.LeaseDuration, match.HousingType, match.Locality,
                                match.RoomType, match.Budget, match.Smoking,
                                match.Drinking, match.Pets, match.similarityScore
                            ];
            
                            con.query(insertMatchQuery, matchValues, (insertErr, insertResult) => {
                                if (insertErr) {
                                    console.error('Error inserting match into database:', insertErr);
                                    // Handle error, maybe continue to next match instead of stopping
                                } else {
                                    console.log('Match inserted successfully:', insertResult);
                                }
                            });
                        });
                });
                    return res.json({ message: 'Similar matches found', matches: similarMatches });
                } else {
                    return res.status(404).send({ message: 'No similar users found' });
                }
            });
        }
    }); 
});

// Helper function to calculate the similarity score
const calculateSimilarityScore = (match, preferences) => {
    let score = 0;
    //const totalPreferences = 11;
    const maxScore = 100; // Maximum score based on 11 criteria * weight

    if (preferences.roomType === match.RoomType || preferences.roomType === "No Preference") score += 9.09;
    if (preferences.leaseDuration === match.LeaseDuration || preferences.leaseDuration === "No Preference") score += 9.09;
    if (preferences.housingType === match.HousingType || preferences.housingType === "No Preference") score += 9.09;
    if (preferences.locality === match.Locality || preferences.locality === "No Preference") score += 9.09;
    if (preferences.university === match.University || preferences.university === "No Preference") score += 9.09;
    if (preferences.gender === match.Gender || preferences.gender === "No Preference") score += 9.1;
    if (preferences.smoking === match.Smoking) score += 9.09;
    if (preferences.drinking === match.Drinking) score += 9.09;
    if (preferences.pets === match.Pets) score += 9.09;

    const budgetDifference = Math.abs(preferences.budget - match.Budget);
    if (budgetDifference <= 100) score += 9.09;

    const moveDateUser = new Date(preferences.moveDate);
    const moveDateMatch = new Date(match.MoveDate);
    const dayDifference = Math.abs(moveDateUser - moveDateMatch) / (1000 * 60 * 60 * 24);
    if (dayDifference <= 10) score += 9.09;

    let percentageScore = Math.round((score / maxScore) * 100);

    return percentageScore;
};

// Helper function to calculate the match percentage
const calculateMatchPercentage = (result, preferences) => {
    let matchCount = 0;
    const totalPreferences = 11;

    // Check each preference and increment the match count if it matches
    if (preferences.roomType === result.RoomType || preferences.roomType === "No Preference") matchCount++;
    if (preferences.leaseDuration === result.LeaseDuration || preferences.leaseDuration === "No Preference") matchCount++;
    if (preferences.housingType === result.HousingType || preferences.housingType === "No Preference") matchCount++;
    if (preferences.locality === result.Locality || preferences.locality === "No Preference") matchCount++;
    if (preferences.university === result.University || preferences.university === "No Preference") matchCount++;
    if (preferences.gender === result.Gender || preferences.gender === "No Preference") matchCount++;
    if (preferences.smoking === result.Smoking) matchCount++;
    if (preferences.drinking === result.Drinking) matchCount++;
    if (preferences.pets === result.Pets) matchCount++;

    const budgetDifference = Math.abs(preferences.budget - result.Budget);
    if (budgetDifference <= 100) matchCount++;

    const moveDateUser = new Date(preferences.moveDate);
    const moveDateMatch = new Date(result.MoveDate);
    const dayDifference = Math.abs(moveDateUser - moveDateMatch) / (1000 * 60 * 60 * 24);
    if (dayDifference <= 10) matchCount++;

  return ((matchCount / totalPreferences) * 100);
};