#!/usr/bin/node


// print to the console
process.stdout.write('Welcome to Holberton School, what is your name?\n')


// get the input form the user
process.stdin.on('data', (data) => {

    const name = data.toString().trim()

    // confirm name
    console.log(`Your name is: ${name}`)

    // exit the progarm
    process.stdout.write('This important software is now closing\n')
    process.exit()
})
