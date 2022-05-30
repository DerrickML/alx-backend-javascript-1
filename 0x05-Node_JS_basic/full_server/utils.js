const fs = require('fs');


const readDatabase = async (path) => {
  return new Promise(async (resolve, reject) => {
    let data;
    try {
      data = await fs.promises.readFile(path, 'utf8');
    } catch (error) {
      reject(error);
    }
    const students =  data.split('\n')
      .map(row => row.split(','))
      .filter(row => row.length === 4 && row[0] !== 'firstname')
      .map(row => ({
        firstName: row[0],
        lastName: row[1],
        age: row[2],
        field: row[3].replace('\r', '')
      }));

    const csStudents = students.filter(student => student.field === 'CS')
      .map(student => student.firstName);
    
    const sweStudents = students.filter(student => student.field === 'SWE')
      .map(student => student.firstName);
    
    resolve({csStudents, sweStudents});
  });
}

export default readDatabase;