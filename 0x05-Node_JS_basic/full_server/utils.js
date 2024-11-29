#!/usr/bin/node

import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    const students = {};
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        const field = row.field;
        const firstname = row.firstname;
        
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      })
      .on('end', () => {
        resolve(students);
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};
