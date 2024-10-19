#!/usr/bin/node


import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default async function handleProfileSignup(firstname, lastname, filename) {
  const finalProfileState = [];
  
  const results = await Promise.allSettled([
    signUpUser(firstname, lastname),
    uploadPhoto(filename),
  ]);

  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      finalProfileState.push({
        status: result.status,
        value: result.value,
      });
    } else {
      // For rejected promises, return the reason as value
      finalProfileState.push({
        status: result.status,
        value: result.reason,
      });
    }
  });

  return finalProfileState;
}
