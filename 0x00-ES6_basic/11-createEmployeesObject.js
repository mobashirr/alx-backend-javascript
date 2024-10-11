#!/usr/bin/node

export default function createEmployeesObject(departmentName, employees) {

  EmployeesObect = {
    '${departmentName}' : [...employees]
  };
  return EmployeesObect;
}