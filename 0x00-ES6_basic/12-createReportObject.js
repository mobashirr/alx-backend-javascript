#!/usr/bin/node


export default function createReportObject(employeesList) {
	EmployeesObject = {
		'allEmployees':{
			...employeesList
		}, getNumberOfDepartments (employeesList) {
			return Object.keys(employeesList).length;
		}
	}
	return EmployeesObject;
}
