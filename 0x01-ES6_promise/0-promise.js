#!/usr/bin/node

function getResponseFromAPI() {
    return new Promise((resolve, reject) => {

    })
}
function a() {
    const response = getResponseFromAPI();
    expect(response instanceof Promise).toBe(true);
  };

  a()