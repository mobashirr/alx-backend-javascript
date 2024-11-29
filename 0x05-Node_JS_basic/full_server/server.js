#!/usr/bin/node


import express from 'express';
import routes from './routes/index';
import path from 'path';

const app = express();

// Read database file path from the command-line argument
const databasePath = process.argv[2];

if (!databasePath) {
  console.error('No database file provided!');
  process.exit(1);
}

// Store the database path in app.locals to access it in controllers
app.locals.database = path.resolve(databasePath);

// Use the routes
app.use(routes);

// Set the port
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
