#!/usr/bin/node

const fs = require('fs')

function countStudents(path) {

    try {
        const data = fs.readFileSync(path,'utf-8').split('\n')
        const number_of_std = data.length - 1
        let maped_data = {}
        console.log(data.length)

        for (let i = 1; i < data.length; i++) {
            const std = data[i].split(',')
            if (std[4] in maped_data) { maped_data[std[4]].append(std)}
            else {maped_data[std[4]] = [std]}
            console.log(data[i])
        }
        console.log(maped_data)

    }
    catch (err) {
        console.log(err)
        throw new Error('Cannot load the database')
    }
 
}

module.exports = countStudents