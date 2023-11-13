// console.log('Task Manager App')
const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.static('./public'));
app.use(express.json());

//routes

app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);
//app.get('/api/v1/tasks')          -get all the tasks
//app.post('/api/v1/tasks')         -create a new task
//app.get('/api/v1/tasks?:id')      -get single tasks
//app.patch('/api.v1/tasks/:id')    -update task
//app.delite('api/v1/tasks/:id')    -delite task

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
