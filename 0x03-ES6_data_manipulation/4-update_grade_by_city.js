#!/usr/bin/node

export default function updateStudentGradeByCity(students, city, newGrades) {
  const defGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students.filter((student) =>
    student.location === city).map((student) =>
    ({
      id: student.id,
      firstname: student.firstName,
      location: student.location,
      grade: (newGrades.filter((grade) => grade.studentId === student.id)[0] || defGrade).grade,
    }));
  }
  return [];
}
