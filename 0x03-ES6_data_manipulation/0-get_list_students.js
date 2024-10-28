#!/usr/bin/node

function getListStudents() {
  obj1 = { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  obj2 = { id: 2, firstName: 'James', location: 'Columbia' },
  obj3 = { id: 5, firstName: 'Serena', location: 'San Francisco' }

  result = [].concat(obj1,obj2,obj3)
  return result
}