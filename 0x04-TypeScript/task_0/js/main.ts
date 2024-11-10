// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two student objects
  const student1: Student = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Bob",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
  };
  
  // Add students to an array
  const studentsList: Student[] = [student1, student2];
  
  // Render a table in the HTML document
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");
  
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");
  
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });
  
  table.appendChild(tableBody);
  document.body.appendChild(table);
  