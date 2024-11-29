const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Asynchronously read the file
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        // Split the file content into lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        // Remove the header row
        const header = lines.shift();

        if (header === undefined) {
          throw new Error('Cannot load the database');
        }

        // Initialize a map to store student counts by field
        const studentsByField = {};

        lines.forEach((line) => {
          const studentData = line.split(',');
          if (studentData.length >= 4) {
            const firstName = studentData[0].trim();
            const field = studentData[3].trim();

            if (!studentsByField[field]) {
              studentsByField[field] = [];
            }
            studentsByField[field].push(firstName);
          }
        });

        // Log the total number of students
        const totalStudents = lines.length;
        console.log(`Number of students: ${totalStudents}`);

        // Log the number of students in each field and their names
        for (const [field, students] of Object.entries(studentsByField)) {
          console.log(
            `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
          );
        }

        resolve();
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
