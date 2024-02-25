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
 
// Database connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Bluesaber#70',
    database: 'llink',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

 
// app.get('/users', async (req, res) => {
//     try {
//         const [rows] = await pool.query('SELECT * FROM users');
//         res.json(rows);
//     } catch (error) {
//         console.error('Error querying the database', error);
//         res.status(500).json({ error: 'Error querying the database' });
//     }
// });

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
 
// app.get('/', (req, res) => {
//     res.send('From the backend'); // Replace with your desired response
// });
 
// app.get('/shutdown', (req, res) => {
//     res.send('Server shutting down...');
//     process.exit(0);
// });
 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("listening");
});