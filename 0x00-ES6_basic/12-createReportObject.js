#!/usr/bin/node

export default function createReportObject(employeesList) {
  const EmployeesObject = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return EmployeesObject;
}
