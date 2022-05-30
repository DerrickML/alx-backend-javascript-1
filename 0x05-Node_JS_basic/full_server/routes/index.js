import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const app = express();

app.get('/', AppController.getHomePage);

app.get('/students', StudentsController.getAllStudents);

app.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default app;
