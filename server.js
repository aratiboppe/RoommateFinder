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
    console.log('Received variables:', Username, Email);
    try {
        // Check if user already exists
        const [existingUsers] = await pool.query('SELECT * FROM users WHERE email = ?', [Email]);
        if (existingUsers.length > 0) {
            return res.status(400).json({ error: 'User already exists' });
        }
        // Insert new user into the database
        const [result] = await pool.query('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', [Username, Password, Email]);
        console.log('INSERT RESULT: ', result);
        res.status(201).json({ message: 'User registered successfully', Username: result.insertId });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Error registering user' });
    }
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

app.post('/submit-preferences', async (req, res) => {
    // Extract preferences from the request body
    const preferences = {
        roomType: req.body['Room type'],
        gender: req.body.Gender,
        grade: req.body.Grade,
        housingType: req.body['Housing Type'],
        locality: req.body.Locality,
        pets: req.body.Pets,
        leaseDuration: req.body['Lease Duration'],
        smoking: req.body.Smoking,
        drinking: req.body.Drinking,
        moveDate: req.body['Move Date'],
        budget: req.body.Budget
    };

    // Construct the SQL query dynamically based on the preferences
    let query = 'SELECT * FROM project_data WHERE 1=1';
    if (preferences.roomType && preferences.roomType !== "No Preference") {
        query += ` AND \`Room type\` = '${preferences.roomType}'`;
    }
    if (preferences.gender && preferences.gender !== "No Preference") {
        query += ` AND Gender = '${preferences.gender}'`;
    }
    if (preferences.grade && preferences.grade !== "No Preference") {
        query += ` AND Grade = '${preferences.grade}'`;
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
    if (preferences.budget && preferences.budget !== "No Preference") {
        // Assuming you want to find users within a budget range, for simplicity, this example matches exact budget
        query += ` AND Budget <= ${preferences.budget}`;
    }
    if (preferences.moveDate && preferences.moveDate !== "No Preference") {
        // Assuming moveDate is stored in YYYY-MM-DD format and preferences.moveDate is also in the same format
        query += ` AND STR_TO_DATE(\`Move Date\`, '%m/%d/%y') BETWEEN DATE_SUB(STR_TO_DATE('${preferences.moveDate}', '%m/%d/%y'), INTERVAL 7 DAY) AND DATE_ADD(STR_TO_DATE('${preferences.moveDate}', '%m/%d/%y'), INTERVAL 7 DAY)`;
    }

    // Execute the query
    con.query(query, (error, results) => {
        if (error) {
            console.error('Error querying the database:', error);
            return res.status(500).send({ error: 'Error querying the database' });
        }

        if (results.length > 0) {
            res.json({ message: 'Matching users found', matches: results });
        } else {
            res.status(404).send({ message: 'No matching users found' });
        }
    });
}); 