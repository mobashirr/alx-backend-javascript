#!/usr/bin/node


import { readDatabase } from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const filePath = req.app.locals.database; // Get the database path from app.locals
    try {
      const students = await readDatabase(filePath);
      res.status(200).write('This is the list of our students\n');
      
      // Sort fields alphabetically (case insensitive)
      const fields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      
      fields.forEach((field) => {
        const names = students[field].join(', ');
        res.write(`Number of students in ${field}: ${students[field].length}. List: ${names}\n`);
      });
      
      res.end();
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const filePath = req.app.locals.database; // Get the database path from app.locals
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(filePath);
      const names = students[major] ? students[major].join(', ') : '';
      res.status(200).send(`List: ${names}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
