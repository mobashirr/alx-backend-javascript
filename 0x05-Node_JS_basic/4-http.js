#!/usr/bin/node
const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response status and headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Send the response body
  res.end('Hello Holberton School!');
});

// Make the server listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Export the server app
module.exports = app;
