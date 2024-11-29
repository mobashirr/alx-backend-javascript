#!/usr/bin/node

const fs = require('fs')

function countStudents(path) {
    try {
        const data = fs.readFileSync(path,'utf-8').split('\n')
        const number_of_std = data.length - 1
        let maped_data = new Map()

        // iterate over students
        for (std_data of data.slice(1)) {
            const fields = std_data.split(',')

            if (maped_data.has(fields[3])) {
                // add the student to the field if its exist
                maped_data.get(fields[3]).push(fields[0])
                
            } else {
                // or if its not in the map set the field with new value
                maped_data.set(fields[3], [fields[0]])
            }
        }

        console.log(`Number of students: ${number_of_std}`)

        // print students by fields
        for ([key,val] of maped_data) {
            console.log(`Number of students in ${key}: ${val.length}. List: ${val.join(', ')}`)
        }
    }
    catch (err) {
        console.log(err)
        throw new Error('Cannot load the database')
    }
 
}

module.exports = countStudents