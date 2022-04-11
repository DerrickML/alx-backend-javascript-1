export default function getStudentIdsSum(students) {
  return students.reduce((previousValue, currentValue) => previousValue + currentValue.id, 0);
}
