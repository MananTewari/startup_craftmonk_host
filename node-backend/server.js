const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const userDataFilePath = 'D:/DESKTOP/Major Projects/startup_craftmonk_host/node-backend/user.json';

let users = [];

if (fs.existsSync(userDataFilePath)) {
  const userData = fs.readFileSync(userDataFilePath);
  users = JSON.parse(userData);
}

app.post('/register', (req, res) => {
  try {
    const { username, password, name, address, email } = req.body;

    // Check if the username already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const newUser = { username, password, name, address, email };
    users.push(newUser);

    fs.writeFileSync(userDataFilePath, JSON.stringify(users, null, 2));
    console.log('User data saved:', newUser); // Log successful save

    res.status(200).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});


app.get('/user/:userId', (req, res) => {
  const { userId } = req.params;
  const user = users.find(user => user.username === userId);
  if (user) {
    res.status(200).json({ user });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
