require('dotenv').config();
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(express.json());
var cors = require('cors');
app.use(cors());

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
    const { Username, Password } = req.body; // Ensure these variable names match the case used in your frontend request

    if (!Username || !Password) {
        return res.status(400).send({ message: 'Username and password are required' });
    }

    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    con.query(query, [Username, Password], (error, results) => {
        if (error) {
            console.error('Error querying the database:', error);
            return res.status(500).send({ error: 'Error querying the database' });
        }

        //console.log(`Query results: ${results.length} user(s) found`); // For debugging

        if (results.length > 0) {
            // Successful login
            res.send({ message: 'Sign-In Successful' });
        } else {
            // Login failed
            res.status(401).send({ message: 'Invalid username or password' });
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
            */
        }
    });
});
