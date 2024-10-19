#!/usr/bin/node

function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      let result = { status: 200, body: 'success' };
      return result;
    })
    .catch(() => {
      return new Error();
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}