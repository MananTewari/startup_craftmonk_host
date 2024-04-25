const { v4: uuidv4 } = require('uuid');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Read user data from the JSON file
let users  = [];
const userDataFile = 'userData.json';

try {
  const userData = fs.readFileSync(userDataFile);
  users = JSON.parse(userData);
} catch (err) {
  console.error('Error reading user data:', err);
}

// Login route
// Login route
// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Login request received for username:', username);
  
  // Check if the user exists and the password matches
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    console.log('Login successful for username:', username);
    res.status(200).json({ message: 'Login successful', user });
  } else {
    console.log('Login failed for username:', username);
    res.status(401).json({ message: 'Invalid credentials' });
  }
});



// Registration route
app.post('/register', (req, res) => {
  const newUser = { id: uuidv4(), ...req.body };
  console.log('Registration request received for username:', newUser.username);
  const existingUser = users.find(u => u.username === newUser.username);
  if (existingUser) {
    res.status(400).json({ message: 'Username already exists' });
  } else {
    users.push(newUser);
    fs.writeFile(userDataFile, JSON.stringify(users), err => {
      if (err) {
        console.error('Error writing user data:', err);
        res.status(500).json({ message: 'Error registering user' });
      } else {
        console.log('User registered successfully:', newUser.username);
        res.status(200).json({ message: 'User registered successfully' });
      }
    });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
