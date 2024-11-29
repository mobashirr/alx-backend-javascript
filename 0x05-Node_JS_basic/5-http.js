#!/usr/bin/node

const http = require('http');
const countStudents = require('./3-read_file_async'); // Import the asynchronous function
const url = require('url');

// Create the server
const app = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);

  if (pathname === '/') {
    // Handle root URL
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    // Handle /students URL
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.write('This is the list of our students\n');

    // Get the database file path from command line arguments
    const databasePath = process.argv[2];

    // Use countStudents to process the database file
    countStudents(databasePath)
      .then(() => {
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    // Handle undefined routes
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

// Make the server listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Export the app
module.exports = app;
