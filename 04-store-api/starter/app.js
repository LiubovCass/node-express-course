require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');
//import middleware
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
//middleware

app.use(express.json());

//rootes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

app.use('/api/v1/products', productsRouter);

//products route

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connectDb
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening port ${port}...`));
  } catch {
    console.log(error);
  }
};

start();
