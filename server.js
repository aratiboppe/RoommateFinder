const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();

const PORT = process.env.PORT || 3001;

const escapeString = value => value.replace(/'/g, "\\'");

app.use(express.json());

app.use(cors({
    origin: "http://localhost:3001",
    methods: ['GET', 'POST'],
}));

// Database Connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Bluesaber#70',
    database: 'llink',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

let signedInUsername = ''; // Keeps track of the username from the sign-in
let signedInUserID = ''; // Keeps track of the userId from sign-in
let isNew = false; // keeps track of if user is new or returning, TRUE = New User, FALSE = Existing

// Verify the Port is up and running
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("listening");
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Endpoint to fetch name type data
app.post('/nameType', async(req,res) => {
    console.log("signed username NAME:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const [userResult] = await pool.query('SELECT UserID FROM users WHERE username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const [result] = await pool.query("SELECT Name FROM profiles WHERE UserID = ?", [signedInUserID]);
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

//Endpoint to fetch email type data
app.post('/emailType', async(req,res) => {
    console.log("signed username email:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const [userResult] = await pool.query('SELECT UserID FROM users WHERE username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const [result] = await pool.query("SELECT Email FROM profiles WHERE UserID = ?", [signedInUserID]);
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

//Endpoint to fetch uni type data
app.post('/uniType', async(req,res) => {
    console.log("signed username University:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const [userResult] = await pool.query('SELECT UserID FROM users WHERE username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const [result] = await pool.query("SELECT University FROM profiles WHERE UserID = ?", [signedInUserID]);
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

//Endpoint to fetch name grade data
app.post('/gradeType', async(req,res) => {
    console.log("signed username GRADE:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const [userResult] = await pool.query('SELECT UserID FROM users WHERE username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const [result] = await pool.query("SELECT Grade FROM profiles WHERE UserID = ?", [signedInUserID]);
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

//Endpoint to fetch gender type data
app.post('/genderType', async(req,res) => {
    console.log("signed username GENDER:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const [userResult] = await pool.query('SELECT UserID FROM users WHERE username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const [result] = await pool.query("SELECT Gender FROM profiles WHERE UserID = ?", [signedInUserID]);
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

//Endpoint to fetch move date type data
app.post('/movedateType', async(req,res) => {
    console.log("signed username MD:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const [userResult] = await pool.query('SELECT UserID FROM users WHERE username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const [result] = await pool.query("SELECT MoveDate FROM profiles WHERE UserID = ?", [signedInUserID]);
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

//Endpoint to fetch lease type data
app.post('/leasedurationType', async(req,res) => {
    console.log("signed username Lease Duration:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const [userResult] = await pool.query('SELECT UserID FROM users WHERE username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const [result] = await pool.query("SELECT LeaseDuration FROM profiles WHERE UserID = ?", [signedInUserID]);
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

//Endpoint to fetch name type data
app.post('/localityType', async(req,res) => {
    console.log("signed username Locality:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const [userResult] = await pool.query('SELECT UserID FROM users WHERE username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const [result] = await pool.query("SELECT Locality FROM profiles WHERE UserID = ?", [signedInUserID]);
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

//Endpoint to fetch name type data
app.post('/roomType', async(req,res) => {
    console.log("signed username Room type:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const [userResult] = await pool.query('SELECT UserID FROM users WHERE username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const [result] = await pool.query("SELECT RoomType FROM profiles WHERE UserID = ?", [signedInUserID]);
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

//Endpoint to fetch name type data
app.post('/budgetType', async(req,res) => {
    console.log("signed username Budget:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const [userResult] = await pool.query('SELECT UserID FROM users WHERE username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const [result] = await pool.query("SELECT Budget FROM profiles WHERE UserID = ?", [signedInUserID]);
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

//Endpoint to fetch housing type data
app.post('/housingType', async(req,res) => {
    console.log("signed username HOUSING:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const [userResult] = await pool.query('SELECT UserID FROM users WHERE username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const [result] = await pool.query("SELECT HousingType FROM profiles WHERE UserID = ?", [signedInUserID]);
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/smokeType', async(req,res) => {
    console.log("signed username SMOKING:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const [userResult] = await pool.query('SELECT UserID FROM users WHERE username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const [result] = await pool.query("SELECT Smoking FROM profiles WHERE UserID = ?", [signedInUserID]);
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/drinkType', async(req,res) => {
    console.log("signed username DRINKING:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const [userResult] = await pool.query('SELECT UserID FROM users WHERE username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const [result] = await pool.query("SELECT Drinking FROM profiles WHERE UserID = ?", [signedInUserID]);
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.post('/petType', async(req,res) => {
    console.log("signed username PETS:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const [userResult] = await pool.query('SELECT UserID FROM users WHERE username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const [result] = await pool.query("SELECT Pets FROM profiles WHERE UserID = ?", [signedInUserID]);
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post('/OptToggle', async(req,res) => {
    console.log("signed username OPT:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const [userResult] = await pool.query('SELECT UserID FROM users WHERE username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const [result] = await pool.query("SELECT isHidden FROM profiles WHERE UserID = ?", [signedInUserID]);
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.post('/userStatus', async (req,res) => {
    if(isNew === true){
        console.log('in if true');
        res.status(201).json({message: 'User is New in USER STATUS', user: 'new'});
        console.log('IN (IF) USERSTATUS --> NEW');
    } else {
        console.log('in if false');
        res.status(201).json({message: 'User is Existing in USER STATUS', user: 'exist'});
        console.log('IN (ELSE) USERSTATUS --> EXISTING');
    }
})

app.post('/optOut', async (req, res) =>{
    try{
        await pool.execute('UPDATE profiles SET isHidden = 1 WHERE UserID = ?', [signedInUserID]);
        res.status(200).json({message: 'User opted out successfully.' });
    } catch (error) {
        console.error('Error opting out user: ', error);
        res.status(500).json({error: 'Failed to opt out user.'});
    }
});

app.post('/optIn', async (req,res) => {
    try {
        await pool.execute('UPDATE profiles SET isHidden = 0 WHERE UserID = ?', [signedInUserID]);
        res.status(200).json({message: 'User opted in successfully.'});
    } catch (error){
        console.error('Error opting in user: ', error);
        res.status(500).json({error: 'Failed to opt in user.'});
    }
});

app.post('/signOut', async (req,res) => {
    signedInUserID = '';
    signedInUsername = '';
    console.log('Signed username: ',signedInUsername);
    console.log('Signed UserID: ',signedInUserID);
    res.status(200).json({message: 'Log off Successful'})
})

// Create Account Server Code
app.post('/register', async (req, res) => {
    console.log('Recieved Request Body:', req.body);
    const { Username, Password, Email } = req.body;
    console.log('Received variables:', Username, Email);
    try {
        // Check if user already exists
        const [existingUsers] = await pool.query('SELECT * FROM users WHERE email = ?', [Email]);
        if (existingUsers.length > 0) {
            return res.status(400).json({ error: 'User already exists' });
        }
        // Insert new user into the database
        const [result] = await pool.query('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', [Username, Password, Email]);
        signedInUsername = Username;
        console.log('INSERT RESULT: ', result);
        res.status(201).json({ message: 'User registered successfully', Username: result.insertId });
        isNew = true;
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Error registering user' });
    }
});

//Reset password page
app.post('/reset-password',async(req,res)=> {
    const{Username, newPassword} = req.body;
    console.log(req.body);
    if(!Username || !newPassword){
        return res.status(400).send({message: 'Username and new password are required'});
    }
    try {
        const[result] = await pool.query('UPDATE Users SET Password = ? WHERE Username = ?', [newPassword, Username]);
        console.log('Update: ', result);
        res.status(200).json({message: 'User password updated', Password: result.insertId});
    } catch (error){
        console.error('Error updating password', error);
        res.status(500).json({error: 'Error updating the password'});
    }
    
});

// Sign-in
app.post('/signin', async(req, res) => {
    const {Username, Password} = req.body;
    console.log("request body: ",req.body);
    if (!Username || !Password) {
        console.log('checking username');
        return res.status(400).send({ message: 'Username and password are required' });
    }

    try {
        const[result] = await pool.query('SELECT * FROM users WHERE Username = ? AND Password = ?', [Username, Password]);
        console.log('FETCHED RESULTS: ', result);

        if (result.length === 0){
            console.log('Incorrect Username and/or Password');
            return res.status(500).json({message: 'Incorrect Username and/or Password'});
        } else {
            signedInUsername = Username;
            console.log('Username: ',signedInUsername);
            res.status(201).json({message: 'User Fetched Successfully', Username: result.insertId});
            isNew = false;
        }

    } catch (error){
        console.error('Error fetching user:', error);
        res.status(500).json({error: 'Error fetching the user'});
    }
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
            const[result] = await pool.query('INSERT INTO profiles (Name, Email, Grade, Gender, University, MoveDate, LeaseDuration, HousingType, RoomType, Locality, Budget, Smoking, Drinking, Pets) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [profile.Name, profile.Email, profile.Grade, profile.Gender, profile.University, profile.MoveDate, profile.LeaseDuration, profile.HousingType, profile.RoomType, profile.Locality, profile.Budget, profile.Smoking, profile.Drinking, profile.Pets]);
            console.log('INSERT RESULT: ',result);
            res.status(201).json({message: 'Profile saved successfully in PROFILES', ProfileId: result.insertId, user: 'new'});
            console.log('IN (IF) SAVE_PROFILES --> NEW');
        } else {
            const[result] = await pool.query('UPDATE profiles SET Name = ?, Email =?, Grade = ?, Gender = ?, University = ?, MoveDate = ?, LeaseDuration = ?, HousingType = ?, RoomType =?, Locality =?, Budget =?, Smoking = ?, Drinking = ?, Pets =? WHERE UserID = ?',
            [profile.Name, profile.Email, profile.Grade, profile.Gender, profile.University, profile.MoveDate, profile.LeaseDuration, profile.HousingType, profile.RoomType, profile.Locality, profile.Budget, profile.Smoking, profile.Drinking, profile.Pets, signedInUserID]);
            console.log('UPDATE RESULT: ',result);
            res.status(201).json({message: 'Profile updated successfully in PROFILES', ProfileId: result.insertId, user: 'exists'});
            console.log('IN (ELSE) SAVE_PROFILES --> EXISTING');
        }
        
    } catch(error){
        console.log('Error saving profile:', error);
        console.error(error.res.data);
        res.status(500).json({error: 'Error saving profile'});
    }
});


//Get the user profile for existing user
//PROFILE 2
app.get('/get-profile', async(req,res) => {
    console.log("signed username:",signedInUsername);
    if(!signedInUsername){
        return res.status(400).json({error: 'Not signed in'});
    }

    try{
        const [userResult] = await pool.query('SELECT UserID FROM users WHERE username = ?', [signedInUsername]);
        if (userResult.length === 0){
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);
        const [result] = await pool.query("SELECT Name, Email, University, Grade, Gender, MoveDate, LeaseDuration, HousingType, Locality, RoomType, Budget, Smoking, Drinking, Pets FROM profiles WHERE UserID = ?", [signedInUserID]);
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


// AXIOSIFIED PREFERENCES
app.post('/submit-preferences', async (req, res) => {
    console.log('Recieved Request Body:', req.body);

    let sendingData = [];

    const preferences = { 
        Username: req.body.Username,
        Gender: req.body.Gender,
        University: req.body.University,
        MoveDate: req.body.MoveDate,
        LeaseDuration: req.body.LeaseDuration,
        HousingType:req.body.HousingType,
        RoomType: req.body.RoomType,
        Locality: req.body.Locality,
        Budget: req.body.Budget,
        Smoking: req.body.Smoking ? "Yes" : "No",
        Drinking: req.body.Drinking ? "Yes" : "No",
        Pets: req.body.Pets ? "Yes" : "No"
        
    };
    
    try{
        console.log(signedInUsername);
        const [userResult] = await pool.query('SELECT UserID FROM users WHERE Username = ?', [signedInUsername]);
        if (userResult.length === 0){
            console.log(signedInUsername);
            return res.status(404).json({error: 'User not found'});
        }
        signedInUserID = userResult[0].UserID;
        console.log("userID:", signedInUserID);

        console.log("*******SIGNED IN USER*********", signedInUserID)
        
        const [prefResult] = await pool.query('SELECT * FROM preferences WHERE UserId = ?',[signedInUserID]);
        
        if (prefResult.length === 0){ // updating the preferences
            console.log('Inserting Result into Preferences');
            const[result] = await pool.query('INSERT INTO preferences (Username, Gender, University, MoveDate, LeaseDuration, HousingType, RoomType, Locality, Budget, Smoking, Drinking, Pets) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [preferences.Username, preferences.Gender, preferences.University, preferences.MoveDate, preferences.LeaseDuration, preferences.HousingType, preferences.RoomType, preferences.Locality, preferences.Budget, preferences.Smoking, preferences.Drinking, preferences.Pets]);
            console.log('INSERT RESULT: ',result);

            const newUser = {message: 'Preferences saved successfully in PREFERENCES', PreferenceId: result.insertId, user: 'new'};
            sendingData.push(newUser);

            console.log('IN (IF) PREFERENCES --> NEW');
        } else {
            console.log('Updating Result into Preferences');
            const[result] = await pool.query('UPDATE preferences SET Username = ?, Gender = ?, University = ?, MoveDate = ?, LeaseDuration = ?, HousingType = ?, RoomType = ?, Locality = ?, Budget = ?, Smoking = ?, Drinking = ?, Pets = ? WHERE UserID = ?',
            [preferences.Username, preferences.Gender, preferences.University, preferences.MoveDate, preferences.LeaseDuration, preferences.HousingType, preferences.RoomType, preferences.Locality, preferences.Budget, preferences.Smoking, preferences.Drinking, preferences.Pets, signedInUserID]);
            console.log('UPDATE RESULT: ',result);
            
            const existingUser = {message: 'Preferences updated successfully in PREFERENCES', PreferenceId: result.insertId, user: 'exists'};
            sendingData.push(existingUser);
            console.log('IN (ELSE) PREFERENCES --> EXISTING');
        }
    } catch(error){
        console.log('Error saving preferences:', error);
        console.error(error.res.data);
        res.status(500).json({error: 'Error saving preferences'});
    }

    // Construct the SQL query dynamically based on the preferences
    let query = 'SELECT UserId, Name, Grade, University FROM profiles WHERE 1=1';

    console.log('Signed In Username: ', signedInUsername);
    console.log('signed in User ID: ', signedInUserID);
    
    if(signedInUserID)
    {
        query += ` AND UserID != '${signedInUserID}'`;
    }
    if (preferences.Smoking && preferences.Smoking !== "No Preference") {
        query += ` AND Smoking = '${preferences.Smoking}'`;
    }
    if (preferences.Drinking && preferences.Drinking !== "No Preference") {
        query += ` AND Drinking = '${preferences.Drinking}'`;
    }
    if (preferences.Pets && preferences.Pets !== "No Preference") {
        query += ` AND Pets = '${preferences.Pets}'`;
    }
    if (preferences.RoomType && preferences.RoomType !== "No Preference") {
        query += ` AND RoomType  = '${preferences.RoomType}'`;
    }
    if (preferences.Gender && preferences.Gender !== "No Preference") {
        query += ` AND Gender = '${preferences.Gender}'`;
    }
    if (preferences.HousingType && preferences.HousingType !== "No Preference") {
        query += ` AND HousingType = '${preferences.HousingType}'`;
    }
    if (preferences.Locality && preferences.Locality !== "No Preference") {
        query += ` AND Locality = '${preferences.Locality}'`;
    }
    if (preferences.LeaseDuration && preferences.LeaseDuration !== "No Preference") {
        query += ` AND LeaseDuration = '${preferences.LeaseDuration}'`;
    }
    if (preferences.Budget && preferences.Budget !== '') {
        query += ` AND Budget <= ${parseInt(preferences.Budget, 10)}`;
    } 
    if (preferences.MoveDate && preferences.MoveDate.trim() !== '') {
        query += ` AND STR_TO_DATE(MoveDate, '%Y-%m-%d') BETWEEN DATE_SUB(STR_TO_DATE('${preferences.MoveDate}', '%Y-%m-%d'), INTERVAL 7 DAY) AND DATE_ADD(STR_TO_DATE('${preferences.MoveDate}', '%Y-%m-%d'), INTERVAL 7 DAY)`;
    }

    if (preferences.University && preferences.University.trim() !== '') {
        query += ` AND University = '${escapeString(preferences.University)}'`;
    } else {
        query += ` AND (University = '' OR University = 'No Preference')`;
    }

    console.log("Results of Query: ", query);

    const [queryResult] = await pool.query(query);
    console.log("Result of the query:", queryResult);
    const potenMtchQuery = `SELECT Name, Grade, University, RoomType, LeaseDuration, HousingType, Locality, Smoking, Drinking, Pets, Gender, Budget, MoveDate FROM profiles WHERE isHidden = 0 AND UserID != ?`;
    // console.log("potenMtchQuery: ", potenMtchQuery);

    const [pontentialMatches] = await pool.query(potenMtchQuery, signedInUserID);
    // console.log("Results of Potential Matches: ", potentialMatchesQuery);
    const matchWScore = pontentialMatches.map(match => ({
        ...match,
        similarityScore: calculateSimilarityScore(match, preferences),
    }));
    //console.log('Similarity Score: ', matchWScore.similarityScore);
    //console.log('Match with score: ',matchWScore);
    const similarMatch = matchWScore.filter(match => match.similarityScore >= 70 && match.similarityScore < 101).sort((a,b) => b.similarityScore - a.similarityScore);

    console.log('SimilarMatch: ', similarMatch);

    if (similarMatch.length > 0){
        const user1NameQuery = 'SELECT Name FROM profiles WHERE UserID = ? LIMIT 1';
        const [user1Result] = await pool.query(user1NameQuery, signedInUserID);
        const user1Name = user1Result[0].Name;
        if(user1Result.length === 0){
            console.error('Error Fetching user1 names', err);
            return res.status(500).send({error: 'User1 Name not found'});
        }
        console.log('User1 Name: ', user1Name);

        for(match of similarMatch){
            const insertMatchQuery = `INSERT INTO matches
            (User1Name, User2Name, User2Grade, User2Gender, User2University, User2MoveDate, User2LeaseDuration, User2HousingType, User2Locality, User2RoomType, User2Budget, User2Smoking, User2Drinking, User2Pets, SimilarityScore)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

            const matchValues = [
                user1Name,
                match.Name,
                match.Grade, match.Gender, match.University, match.MoveDate,
                match.LeaseDuration, match.HousingType, match.Locality,
                match.RoomType, match.Budget, match.Smoking,
                match.Drinking, match.Pets, match.similarityScore
            ];
            
            const[insertResult] = await pool.query(insertMatchQuery, matchValues);
            if (insertResult.length === 0){
                console.error('Error inserting match into db', err);
                return res.status(500).send({error: 'inserting error'});
            }
        }
        console.log('return statement');
        const matchingdata = {message: 'Matches', match: similarMatch};
        sendingData.push(matchingdata)
        return res.status(202).json({ message: 'All the data', data: sendingData });
        }else {
            console.log('else statement');
            return res.status(404).send({ message: 'No similar users found' });
        }
});

// Helper function to calculate the similarity score
const calculateSimilarityScore = (match, preferences) => {
    let score = 0;
    //const totalPreferences = 11;
    const maxScore = 100; // Maximum score based on 11 criteria * weight
    console.log("Mathced Preference", match);
    console.log("Pref Prefrences: ", preferences);
    if (preferences.RoomType === match.RoomType || preferences.RoomType === "No Preference") score += 9.09;
    if (preferences.LeaseDuration === match.LeaseDuration || preferences.LeaseDuration === "No Preference") score += 9.09;
    if (preferences.HousingType === match.HousingType || preferences.HousingType === "No Preference") score += 9.09;
    if (preferences.Locality === match.Locality || preferences.Locality === "No Preference") score += 9.09;
    if (preferences.University === match.University || preferences.University === "No Preference") score += 9.09;
    if (preferences.Gender === match.Gender || preferences.Gender === "No Preference") score += 9.1;
    if (preferences.Smoking === match.Smoking) score += 9.09;
    if (preferences.Drinking === match.Drinking) score += 9.09;
    if (preferences.Pets === match.Pets) score += 9.09;

    const budgetDifference = Math.abs(preferences.Budget - match.Budget);
    if (budgetDifference <= 100) score += 9.09;

    const moveDateUser = new Date(preferences.MoveDate);
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
    if (preferences.RoomType === result.RoomType || preferences.RoomType === "No Preference") matchCount++;
    if (preferences.LeaseDuration === result.LeaseDuration || preferences.LeaseDuration === "No Preference") matchCount++;
    if (preferences.HousingType === result.HousingType || preferences.HousingType === "No Preference") matchCount++;
    if (preferences.Locality === result.Locality || preferences.Locality === "No Preference") matchCount++;
    if (preferences.University === result.University || preferences.University === "No Preference") matchCount++;
    if (preferences.Gender === result.Gender || preferences.Gender === "No Preference") matchCount++;
    if (preferences.Smoking === result.Smoking) matchCount++;
    if (preferences.Drinking === result.Drinking) matchCount++;
    if (preferences.Pets === result.Pets) matchCount++;

    const budgetDifference = Math.abs(preferences.Budget - result.Budget);
    if (budgetDifference <= 100) matchCount++;

    const moveDateUser = new Date(preferences.MoveDate);
    const moveDateMatch = new Date(result.MoveDate);
    const dayDifference = Math.abs(moveDateUser - moveDateMatch) / (1000 * 60 * 60 * 24);
    if (dayDifference <= 10) matchCount++;

  return ((matchCount / totalPreferences) * 100);
};

app.put('/matches/:User2Name', async (req, res) => {
    const { LikeStatus, DislikeStatus } = req.body;
    const { User2Name } = req.params;

    // Assuming `pool` is your database connection
    try {
        await pool.query(
            'UPDATE matches SET LikeStatus = ?, DislikeStatus = ? WHERE User2Name = ?',
            [LikeStatus, DislikeStatus, User2Name]
        );
        res.send({ success: true });
    } catch (error) {
        console.error("Error updating match status in the database:", error);
        res.status(500).send({ error: 'Database update failed' });
    }
});

app.get('/matches', async(req, res) => {
    const [userResult] = await pool.query('SELECT UserID FROM users WHERE Username = ?', [signedInUsername]);
    signedInUserID = userResult[0].UserID;    
    const sql = `SELECT * FROM matches WHERE isHidden = 0 AND User1ID = ?`;
    console.log('Signed in userid MATCHES: ', signedInUserID)
    const[results] = await pool.query(sql, [signedInUserID]);
    console.log("Results: ", results);
    res.json(results);
});

// Endpoint to fetch conversation messages
app.get('/fetch-messages', async (req, res) => {
    //const signedInUsername = req.headers['x-user-username']; // Temporarily get username from header for testing
    const { receiver } = req.query; // Assuming you pass the receiver as a query parameter
    console.log('Messages Signed in username: ',signedInUsername);

    if (!signedInUsername) {
        return res.status(403).json({ error: 'User must be signed in to fetch messages' });
    }
    if (!receiver) {
        return res.status(400).send({ message: 'Receiver is required' });
    }
    
    const query = 'SELECT * FROM messages WHERE (sender = ? AND receiver = ?) OR (sender =? AND receiver = ?) ORDER BY message_id';
    const values = [signedInUsername, receiver, receiver, signedInUsername];
    const [results] = await pool.query(query,values);
    console.log("results: ", results);
    res.status(201).send({results});
});

// Endpoint to save messages
app.post('/save-message', async (req, res) => {
    console.log('Received Message Body:', req.body);
    console.log('Save Messages Signed Username: ', signedInUsername);

    // Extract message data from the request body
    const { receiver, message } = req.body; // No longer taking sender from the body
    if (!receiver || !message) {
        return res.status(400).json({ error: 'Receiver and message are required.' });
    }
    if (!signedInUsername) {
        return res.status(403).json({ error: 'User must be signed in to send messages.' });
    }

    // Insert the message into the database
    const insertMessageQuery = 'INSERT INTO messages (sender, receiver, message) VALUES (?, ?, ?)';
    const values = [signedInUsername, receiver, message];
    const [result] = await pool.query(insertMessageQuery, values);
    console.log('INSERT RESULT:', result);
    res.status(201).json({ message: message, messageId: result.insertId });
    });
