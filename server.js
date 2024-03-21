const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();

const PORT = process.env.PORT || 3001;

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
        console.log('INSERT RESULT: ', result);
        res.status(201).json({ message: 'User registered successfully', Username: result.insertId });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Error registering user' });
    }
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
        RoomType: req.body['Room Type'],
        Budget: req.body.Budget,
        Smoking: req.body.Smoking ? "Yes" : "No",
        Drinking: req.body.Drinking ? "Yes" : "No",
        Pets: req.body.Pets ? "Yes" : "No",
        Email: req.body.Email
        
    };
    //const {Name, Grade, Gender, University, MoveDate, LeaseDuration, HousingType, Locality, RoomType, Budget, Smoking, Drinking, Pets, Email} = req.body;
    try{
        const[result] = await pool.query('INSERT INTO profiles (Name, Grade, Gender, University, `Move Date`, `Lease Duration`, `Housing Type`, Locality, `Room Type`, Budget, Smoking, Drinking, Pets, Email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [profile.Name, profile.Grade, profile.Gender, profile.University, profile.MoveDate, profile.LeaseDuration, profile.HousingType, profile.Locality, profile.RoomType, profile.Budget, profile.Smoking, profile.Drinking, profile.Pets, profile.Email]);
        console.log('INSERT RESULT: ',result);
        res.status(201).json({message: 'Profile saved successfully', ProfileId: result.insertId});
    } catch(error){
        console.log('Error saving profile:', error);
        res.status(500).json({error: 'Error saving profile'});
    }
});

// Server Running and Active
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("listening");
});