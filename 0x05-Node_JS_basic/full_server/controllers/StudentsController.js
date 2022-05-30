import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(process.argv[2]);
      const str1 = 'This is the list of our students\n';
      const str2 = `Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`;
      const str3 = `Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`;
      res.send(str1 + str2 + str3);
    } catch (e) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const data = await readDatabase(process.argv[2]);
      const list = major === 'CS' ? data.csStudents.join(', ') : data.sweStudents.join(', ');
      return res.status(200).send(`List: ${list}`);
    } catch (e) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
