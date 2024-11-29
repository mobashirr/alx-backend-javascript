#!/usr/bin/node

const express = require('express');
const countStudents = require('./3-read_file_async'); // Import the asynchronous function

// Create an Express application
const app = express();

// Define the root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define the /students route
app.get('/students', (req, res) => {
  const databasePath = process.argv[2]; // Get the database path from command-line arguments

  res.write('This is the list of our students\n');

  countStudents(databasePath)
    .then(() => {
      res.end();
    })
    .catch((error) => {
      res.status(500).end(error.message);
    });
});

// Start the server on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export the app
module.exports = app;
