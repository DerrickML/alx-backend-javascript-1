const http = require('http');

const getStudentData = require('./3-read_file_async');

const PORT = 1245;
const HOST_NAME = '127.0.0.1';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    getStudentData(process.argv[2]).then((data) => {
      res.write(`Number of students: ${data.students.length}\n`);
      res.write(`Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}\n`);
      res.write(`Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}`);
      res.end();
    }).catch((err) => res.end(err.message));
  }
});

app.listen(PORT, HOST_NAME, () => {
  console.log(`Server running at http://${HOST_NAME}:${PORT}`);
});

module.exports = app;
