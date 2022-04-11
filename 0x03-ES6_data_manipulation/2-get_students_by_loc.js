export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) return [];

  if (students && !city) return students;

  return students.filter((student) => student.location === city);
}
