#!/usr/bin/node

function getFullResponseFromAPI(success){
  return new Promise((resolve, reject) => {
    if (success) {
      result = {
        status: 200,
        body: 'Success'
      };
     resolve(result)
    }
    else {
      reject('The fake API is not working currently')
    }
  });
};
