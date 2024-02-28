require('dotenv').config();
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(express.json());
var cors = require('cors');
app.use(cors());

// Middleware to parse JSON and URL-encoded bodies
// updated on 2/27
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

// Route to fetch all users
/*
app.get('/user', function(req, res){
    con.query('SELECT * FROM users', function(error, rows, fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});
*/

app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send({ message: 'Username and password are required' });
    }

    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    con.query(query, [username, password], (error, results) => {
        if (error) {
            console.error('Error querying the database:', error);
            return res.status(500).send({ error: 'Error querying the database' });
        }

        if (results.length > 0) {
            res.send({ message: 'Sign-In Successful' });
        } else {
            res.status(401).send({ message: 'Invalid username or password' });
        }
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

});