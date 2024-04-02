// readFromJson.js

const fs = require('fs');
const mongoose = require('mongoose');


// Absolute file path to the JSON data
const filePath = './items.json'; // Updated file path to items.json in the same folder

// Read JSON file
const jsonData = fs.readFileSync(filePath, 'utf8');
const items = JSON.parse(jsonData);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my-database', {
  
  serverSelectionTimeoutMS: 5000, // Add this line
}).then(async () => {
  console.log('Connected to MongoDB');
  
  // Insert items into MongoDB
  await mongoose.connection.db.collection('items').insertMany(items);

  console.log('Data inserted into MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
