#!/usr/bin/node

function getResponseFromAPI() {
    return new Promise((resolve, reject) => {

        if (True) {
            resolve('done')
        }
        else {
            reject('error')
        }
    })
}