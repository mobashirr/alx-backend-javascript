#!/usr/bin/node

import { uploadPhoto, createUser } from './utils'; // Use ES6 import

function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((res) => 
    { console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}


export default handleProfileSignup
