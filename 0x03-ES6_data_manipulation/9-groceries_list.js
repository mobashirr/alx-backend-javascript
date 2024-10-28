#!/usr/bin/node

export default function cleanSet(set, startString) {
  const parts = [];
  // validate inputs
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  // iterate over all value of given set
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      // if the current value start with our string pattern save the current val
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        // check that the current val is not empty after slice
        parts.push(valueSubStr);
      }
    }
  }
  // join all matched strings into parts array
  return new Map(parts.join('-'));
}