#!/usr/bin/node

const readline = require('readline')


// because node is one-threaded, normal I/O opreations mustn't block that thread
// so its handeled using async opreaions that provided by readline module
// we have to create an interface to read from the console input
bridge = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


// using the interface to access the inupt of the console 
bridge.question('Welcome to Holberton School, what is your name?\n', (name) => {
    console.log('your name is: ' + name)
    bridge.close()
})
