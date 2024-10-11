#!/usr/bin/node

export default function appendToEachArrayValue(array, appendString) {
  for (let [idx, value] of array.entires()) {
    array[idx] = appendString + value;
  }
  return array;
}