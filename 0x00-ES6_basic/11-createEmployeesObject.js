#!/usr/bin/node

export default function createEmployeesObject(departmentName, employees) {
  const EmployeesObect = {
    [departmentName]: [...employees],
  };
  return EmployeesObect;
}
