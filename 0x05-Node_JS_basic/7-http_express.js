const express = require('express');

const PORT = 1245;

const app = express();
const getStudentData = require('./3-read_file_async');

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  res.write('This is the list of our students\n');

  await getStudentData(process.argv[2]).then((data) => {
    res.write(`Number of students: ${data.students.length}\n`);
    res.write(`Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}\n`);
    res.write(`Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}`);
  }).catch((err) => res.write(err.message))
    .finally(() => {
      res.end();
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
