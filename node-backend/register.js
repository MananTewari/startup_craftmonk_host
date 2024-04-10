const express = require('express');
const router = express.Router();
const fs = require('fs');

// Handle POST requests to /register
router.post('/register', async (req, res) => {
  try {
    // Extract user data from the request body
    const { username, password, name, address, email } = req.body;

    // Read user data from user.json file
    const userData = fs.readFileSync('./user.json', 'utf8');

    // Parse JSON data
    const users = JSON.parse(userData);

    // Check if the username already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user object
    const newUser = { username, password, name, address, email };

    // Add the new user to the users array
    users.push(newUser);

    // Write the updated user data back to user.json file
    fs.writeFileSync('./user.json', JSON.stringify(users));

    // Respond with a success message
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    // Handle any errors that occur during registration
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

module.exports = router;
