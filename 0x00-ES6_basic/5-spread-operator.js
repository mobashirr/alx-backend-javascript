#!/usr/bin/node

export default function concatArrays(...args) {
  return args.reduce((holder, item) => {
    if (typeof item === 'string') {
      return [...holder, ...item];
    } else if (Array.isArray(item)) {
      return [...holder, ...item.reduce((innerholder, el) => 
        typeof el === 'string' ? [...innerholder, ...el] : [...innerholder, el]
      , [])];
    } else {
      return [...holder, item];
    }
  }, []); // The initial value of `holder` is an empty array

}
