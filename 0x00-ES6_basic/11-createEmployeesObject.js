#!/usr/bin/node

function createEmployeesObject(departmentName, employees) {

  EmployeesObect = {
   [departmentName]: [...employees]
  };
  return EmployeesObect;
}
