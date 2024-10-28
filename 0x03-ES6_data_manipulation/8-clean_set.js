#!/usr/bin/node

export default function cleanSet(set, startString) {
  const result = [];

  set.array.forEach((element) => {
    if (element.startsWith(startString)) {
      result.concat([element]);
    }
  });
  return result;
}
