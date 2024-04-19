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
let isNew = false; // keeps track of if user is new or returning, TRUE = New User, FALSE = Existing


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

// Endpoint to fetch name type data
app.post('/nameType', async(req,res) => {
    console.log("signed username NAME:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const userResult = con.query('SELECT UserID FROM users WHERE Username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const result = con.query("SELECT Name FROM profiles WHERE UserID = ?", [signedInUserID]);
        console.log('Query: ', result);
        if (result.length === 0){
            return res.status(404).json({error: "Name is not there"});
        }
        res.status(200).json({message: "Name Data is found", name: result[0]});
    } catch (error){
        console.error("Error fetching name: ", error);
        res.status(500).json({error: "Name is not set"});
    }
});

// Endpoint to fetch email type data
app.post('/emailType', async(req,res) => {
    console.log("signed username email:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const userResult = con.query('SELECT UserID FROM users WHERE Username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const result = con.query("SELECT Email FROM profiles WHERE UserID = ?", [signedInUserID]);
        console.log('Query: ', result);
        if (result.length === 0){
            return res.status(404).json({error: "Email is not there"});
        }
        res.status(200).json({message: "Email data is there", email: result[0]});
    } catch (error){
        console.error("error fetching email: ", error);
        res.status(500).json({error: "Email not found"});
    }
});

// Endpoint to fetch uni type data
app.post('/uniType', async(req,res) => {
    console.log("signed username University:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const userResult = con.query('SELECT UserID FROM users WHERE Username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const result = con.query("SELECT University FROM profiles WHERE UserID = ?", [signedInUserID]);
        console.log('Query: ', result);
        if (result.length === 0){
            return res.status(404).json({error: "Univeristy is not there"});
        }
        res.status(200).json({message: "University data is there", university: result[0]});
    } catch (error){
        console.error("error fetching University: ", error);
        res.status(500).json({error: "University not found"});
    }
});

// Endpoint to fetch name grade data
app.post('/gradeType', async(req,res) => {
    console.log("signed username GRADE:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const userResult = con.query('SELECT UserID FROM users WHERE Username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const result = con.query("SELECT Grade FROM profiles WHERE UserID = ?", [signedInUserID]);
        console.log('Query: ', result);
        if (result.length === 0){
            return res.status(404).json({error: "Grade is not there"});
        }
        res.status(200).json({message: "Grade data is there", grade: result[0]});
    } catch (error){
        console.error("error fetching grade: ", error);
        res.status(500).json({error: "Grade not found"});
    }
});

// Endpoint to fetch gender type data
app.post('/genderType', async(req,res) => {
    console.log("signed username GENDER:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const userResult = con.query('SELECT UserID FROM users WHERE Username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const result = con.query("SELECT Gender FROM profiles WHERE UserID = ?", [signedInUserID]);
        console.log('Query: ', result);
        if (result.length === 0){
            return res.status(404).json({error: "Gender is not there"});
        }
        res.status(200).json({message: "Gender data is there", gender: result[0]});
    } catch (error){
        console.error("error fetching gender: ", error);
        res.status(500).json({error: "Gender data is not found"});
    }
});

// Endpoint to fetch move date type data
app.post('/movedateType', async(req,res) => {
    console.log("signed username MD:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const userResult = con.query('SELECT UserID FROM users WHERE Username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const result = con.query("SELECT DATE_FORMAT(MoveDate, '%Y-%m-%d') AS MoveDate FROM profiles WHERE UserID = ?", [signedInUserID]);
        console.log('Query: ', result);
        if (result.length === 0){
            return res.status(404).json({error: "Move Date is not there"});
        }
        res.status(200).json({message: "Move Date data is there", moveDate: result[0]});
    } catch (error){
        console.error("error fetching Move Date: ", error);
        res.status(500).json({error: "Move Date not found"});
    }
});

// Endpoint to fetch lease type data
app.post('/leasedurationType', async(req,res) => {
    console.log("signed username Lease Duration:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const userResult = con.query('SELECT UserID FROM users WHERE Username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const result = con.query("SELECT LeaseDuration FROM profiles WHERE UserID = ?", [signedInUserID]);
        console.log('Query: ', result);
        if (result.length === 0){
            return res.status(404).json({error: "Lease Duration is not there"});
        }
        res.status(200).json({message: "Lease Duration data is there", leaseDuration: result[0]});
    } catch (error){
        console.error("error fetching Lease Duration: ", error);
        res.status(500).json({error: "error bro youre durationlesss"});
    }
});

// Endpoint to fetch name type data
app.post('/localityType', async(req,res) => {
    console.log("signed username Locality:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const userResult = con.query('SELECT UserID FROM users WHERE Username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const result = con.query("SELECT Locality FROM profiles WHERE UserID = ?", [signedInUserID]);
        console.log('Query: ', result);
        if (result.length === 0){
            return res.status(404).json({error: "Locality is not there"});
        }
        res.status(200).json({message: "Locality data is there", locality: result[0]});
    } catch (error){
        console.error("error fetching Locality: ", error);
        res.status(500).json({error: "Locality not found"});
    }
});

// Endpoint to fetch name type data
app.post('/roomType', async(req,res) => {
    console.log("signed username Room type:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const userResult = con.query('SELECT UserID FROM users WHERE Username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const result = con.query("SELECT RoomType FROM profiles WHERE UserID = ?", [signedInUserID]);
        console.log('Query: ', result);
        if (result.length === 0){
            return res.status(404).json({error: "Room type is not there"});
        }
        res.status(200).json({message: "Room type data is there", roomType: result[0]});
    } catch (error){
        console.error("error fetching Room type: ", error);
        res.status(500).json({error: "Room Type was not found"});
    }
});

// Endpoint to fetch name type data
app.post('/budgetType', async(req,res) => {
    console.log("signed username Budget:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const userResult = con.query('SELECT UserID FROM users WHERE Username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const result = con.query("SELECT Budget FROM profiles WHERE UserID = ?", [signedInUserID]);
        console.log('Query: ', result);
        if (result.length === 0){
            return res.status(404).json({error: "Budget is not there"});
        }
        res.status(200).json({message: "Budget data is there", budget: result[0]});
    } catch (error){
        console.error("error fetching Budget: ", error);
        res.status(500).json({error: "Budget data not found"});
    }
});

// Endpoint to fetch housing type data
app.post('/housingType', async(req,res) => {
    console.log("signed username HOUSING:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const userResult = con.query('SELECT UserID FROM users WHERE Username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const result = con.query("SELECT HousingType FROM profiles WHERE UserID = ?", [signedInUserID]);
        console.log('Query: ', result);
        if (result.length === 0){
            return res.status(404).json({error: "HousingType is not there"});
        }
        res.status(200).json({message: "Housing data is there", housingType: result[0]});
    } catch (error){
        console.error("error fetching housingType: ", error);
        res.status(500).json({error: "Housing type was not found"});
    }
});

// Endpoint to fetch smoke type data
app.post('/smokeType', async(req,res) => {
    console.log("signed username SMOKING:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const userResult = con.query('SELECT UserID FROM users WHERE Username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const result = con.query("SELECT Smoking FROM profiles WHERE UserID = ?", [signedInUserID]);
        console.log('Query: ', result);
        if (result.length === 0){
            return res.status(404).json({error: "Smoking is not there"});
        }
        res.status(200).json({message: "Smoking data is there", smoke: result[0]});
    } catch (error){
        console.error("error fetching smoking: ", error);
        res.status(500).json({error: "Smoking data is not found"});
    }
});

// Endpoint to fetch drink type data
app.post('/drinkType', async(req,res) => {
    console.log("signed username DRINKING:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const userResult = con.query('SELECT UserID FROM users WHERE Username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const result = con.query("SELECT Drinking FROM profiles WHERE UserID = ?", [signedInUserID]);
        console.log('Query: ', result);
        if (result.length === 0){
            return res.status(404).json({error: "Drinking is not there"});
        }
        res.status(200).json({message: "Drinking data is there", drink: result[0]});
    } catch (error){
        console.error("error fetching drinking: ", error);
        res.status(500).json({error: "Drinking data is not found"});
    }
});

// Endpoint to fetch pet type data
app.post('/petType', async(req,res) => {
    console.log("signed username PETS:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const userResult = con.query('SELECT UserID FROM users WHERE Username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const result = con.query("SELECT Pets FROM profiles WHERE UserID = ?", [signedInUserID]);
        console.log('Query: ', result);
        if (result.length === 0){
            return res.status(404).json({error: "Pets is not there"});
        }
        res.status(200).json({message: "Pet data is there", pets: result[0]});
    } catch (error){
        console.error("error fetching Pet: ", error);
        res.status(500).json({error: "Pets data is not found"});
    }
});

// Endpoint to fetch opt toggle data
app.post('/OptToggle', async(req,res) => {
    console.log("signed username OPT:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const userResult = con.query('SELECT UserID FROM users WHERE Username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const result = con.query("SELECT isHidden FROM profiles WHERE UserID = ?", [signedInUserID]);
        console.log('Query: ', result);
        if (result.length === 0){
            return res.status(404).json({error: "Opt is not there"});
        }
        res.status(200).json({message: "Opt data is there", opt: result[0]});
    } catch (error){
        console.error("error fetching Opt: ", error);
        res.status(500).json({error: "Opt data not found"});
    }
});

// Endpoint to fetch user status
app.post('/userStatus', async (req,res) => {
    if(isNew === true){
        console.log('in if true');
        res.status(201).json({message: 'User is New', user: 'new'});
    } else {
        console.log('in if false');
        res.status(201).json({message: 'User is Existing', user: 'exist'});
    }
})

// Create Account Server Code
app.post('/register', async (req, res) => {
    console.log('Recieved Request Body:', req.body);
    const { Username, Password, Email } = req.body;
    console.log('Received variables:', Username, Email);
    try {
        // Check if user already exists
        const existingUsers = con.query('SELECT * FROM users WHERE Email = ?', [Email]);
        if (existingUsers.length > 0) {
            return res.status(400).json({ error: 'User already exists' });
        }
        // Insert new user into the database
        const result = con.query('INSERT INTO users (Username, Password, Email) VALUES (?, ?, ?)', [Username, Password, Email]);
        signedInUsername = Username;
        console.log('INSERT RESULT: ', result);
        res.status(201).json({ message: 'User registered successfully', Username: result.insertId });
        isNew = true;
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Error registering user' });
    }
});

// Reset password page
app.post('/reset-password',(req,res)=> {
    const{Username, newPassword} = req.body;
    console.log(req.body);
    if(!Username || !newPassword){
        return res.status(400).send({message: 'Username and new password are required'});
    }
    con.query('UPDATE users SET Password = ? WHERE Username = ?', [newPassword, Username], (error, result) => {
        if(error){
            console.error('Error updating the database', error);
            return res.status(500).send({error: 'Error updating the database'});
        }
        if(result.affectedRows > 0){
            res.send({message: 'Password reset successful'});
        } else{
            res.status(404).send({message:'User not found'});
        }
    });
});

app.post('/signin', (req, res) => {
    const { Username, Password } = req.body; // Ensure these variable names match the case used in your frontend request

    if (!Username || !Password) {
        return res.status(400).send({ message: 'Username and password are required' });
    }

    const query = 'SELECT * FROM users WHERE Username = ? AND Password = ?';
    con.query(query, [Username, Password], (error, results) => {
        if (error) {
            console.error('Error querying the database:', error);
            return res.status(500).send({ error: 'Error querying the database' });
        }

        //console.log(`Query results: ${results.length} user(s) found`); // For debugging

        if (results.length > 0) {
            signedInUsername = Username; // Set the global variable if login is successful
            isNew = false; // Assuming this is not a new user since they are in the database
            console.log('Username: ',signedInUsername);
            res.status(200).send({ message: 'Sign-In Successful', user: { username: signedInUsername, isNew: isNew } });
        } else {
            // Login failed
            res.status(401).send({ message: 'Invalid username or password' });
        }
    });
});


// Create Profile Server Code 
// PROFILE 1
app.post('/saveProfile', async (req, res) => {
    console.log('Recieved Request Body:', req.body);
    const profile = { 
        Name: req.body.Name,
        Email: req.body.Email,
        Grade: req.body.Grade,
        Gender: req.body.Gender,
        University: req.body.University,
        MoveDate: req.body.MoveDate,
        LeaseDuration: req.body.LeaseDuration,
        HousingType:req.body.HousingType,
        Locality: req.body.Locality,
        RoomType: req.body.RoomType,
        Budget: req.body.Budget,
        Smoking: req.body.Smoking ? "Yes" : "No",
        Drinking: req.body.Drinking ? "Yes" : "No",
        Pets: req.body.Pets ? "Yes" : "No"
    };

    try{
        console.log("*******SIGNED IN USER: **********", signedInUserID)
        if (!signedInUserID){ // updating the profile
            const result = con.query('INSERT INTO profiles (Name, Email, Grade, Gender, University, MoveDate, LeaseDuration, HousingType, RoomType, Locality, Budget, Smoking, Drinking, Pets) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [profile.Name, profile.Email, profile.Grade, profile.Gender, profile.University, profile.MoveDate, profile.LeaseDuration, profile.HousingType, profile.RoomType, profile.Locality, profile.Budget, profile.Smoking, profile.Drinking, profile.Pets]);
            console.log('INSERT RESULT: ',result);
            res.status(201).json({message: 'Profile saved successfully', ProfileId: result.insertId, user: 'new'});
        } else {
            const result = con.query('UPDATE profiles SET Name = ?, Email =?, Grade = ?, Gender = ?, University = ?, MoveDate = ?, LeaseDuration = ?, HousingType = ?, RoomType =?, Locality =?, Budget =?, Smoking = ?, Drinking = ?, Pets =? WHERE UserID = ?',
            [profile.Name, profile.Email, profile.Grade, profile.Gender, profile.University, profile.MoveDate, profile.LeaseDuration, profile.HousingType, profile.RoomType, profile.Locality, profile.Budget, profile.Smoking, profile.Drinking, profile.Pets,signedInUserID]);
            console.log('UPDATE RESULT: ',result);
            res.status(201).json({message: 'Profile updated successfully', ProfileId: result.insertId, user: 'exists'});
        }
    } catch(error){
        console.log('Error saving profile:', error);
        console.error(error.res.data);
        res.status(500).json({error: 'Error saving profile'});
    }
});

// Get the user profile for existing user
// PROFILE 2
app.get('/get-profile', async(req,res) => {
    console.log("signed username:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const [userResult] = con.query('SELECT UserID FROM users WHERE Username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const result = con.query("SELECT Name, Email, University, Grade, Gender, MoveDate, LeaseDuration, HousingType, Locality, RoomType, Budget, Smoking, Drinking, Pets FROM profiles WHERE UserID = ?", [signedInUserID]);
        console.log('Query: ', result);
        if (result.length === 0){
            return res.status(404).json({error: "Profile not found"});
        }
        res.status(200).json({message: "profile fetched successfully", profile: result[0]});
    } catch (error){
        console.error("error fetching profile: ", error);
        res.status(500).json({error: "error fetching profile"});
    }
});

app.post('/optOut', async (req, res) =>{
    try{
        con.execute('UPDATE profiles SET isHidden = 1 WHERE UserID = ?', [signedInUserID]);
        res.status(200).json({message: 'User opted out successfully.' });
    } catch (error) {
        console.error('Error opting out user: ', error);
        res.status(500).json({error: 'Failed to opt out user.'});
    }
});

app.post('/optIn', async (req,res) => {
    try {
        con.execute('UPDATE profiles SET isHidden = 0 WHERE UserID = ?', [signedInUserID]);
        res.status(200).json({message: 'User opted in successfully.'});
    } catch (error){
        console.error('Error opting in user: ', error);
        res.status(500).json({error: 'Failed to opt in user.'});
    }
})

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

app.put('/matches/:user2Name', (req, res) => {
    const { user2Name } = req.params;
    const { LikeStatus, DislikeStatus } = req.body;

    // Assuming you have a database connection and a "matches" table
    // Replace "your_database_connection" and "matches" with your actual database connection and table name
    con.query(
        'UPDATE matches SET LikeStatus = ?, DislikeStatus = ? WHERE User2Name = ?',
        [LikeStatus, DislikeStatus, user2Name],
        (error, results) => {
            if (error) {
                console.error("Error updating match status:", error);
                res.status(500).json({ error: 'Internal Server Error' });
            } else if (results.affectedRows === 0) {
                res.status(404).json({ error: 'Match not found' });
            } else {
                res.json({ message: 'Match status updated successfully' });
            }
        }
    );
});

app.get('/matches', (req, res) => {
    const sql = 'SELECT * FROM matches'; // WHERE User1Name = signedInUsername
  
    con.query(sql, (err, results) => {
      if (err) {
        console.error('Error querying the database for matches:', err);
        return res.status(500).send({ error: 'Error querying the database for matches' });
      }
      res.json(results);
    });
});


// Endpoint to save messages
app.post('/save-message', async (req, res) => {
    console.log('Received Message Body:', req.body);
    
    // Extract message data from the request body
    const { receiver, message } = req.body; // No longer taking sender from the body

    if (!receiver || !message) {
        return res.status(400).json({ error: 'Receiver and message are required.' });
    }

    if (!signedInUsername) {
        return res.status(403).json({ error: 'User must be signed in to send messages.' });
    }

    // Perform any necessary validation on the message data

    // Insert the message into the database
    const insertMessageQuery = 'INSERT INTO messages (sender, receiver, message) VALUES (?, ?, ?)';
    const values = [signedInUsername, receiver, message];

    con.query(insertMessageQuery, values, (error, result) => {
        if (error) {
            console.error('Error saving message:', error);
            return res.status(500).json({ error: 'Error saving message' });
        }
        console.log('INSERT RESULT:', result);
        res.status(201).json({ message: 'Message sent successfully', messageId: result.insertId });
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