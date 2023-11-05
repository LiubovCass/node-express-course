const express = require('express');
// const path = require('path');
const app = express();
// const { products } = require('./data.js');
//req => middleware => res
const { products, people } = require('./data.js');
const peopleRouter = require('./routes/people.js');

//static assets

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};
// app.use(express.static('./public'));

app.use(express.static('./methods-public'));
//parses url-encoded data
app.use(express.urlencoded({ extended: false }));
//parses a JSON body
app.use(express.json());
app.use(['/', '/About', '/api/v1/people'], logger);
app.use('/api/v1/people', peopleRouter);

// app.get('/', (req, res) => {
//   res.send('Home');
// });

// app.get('/About', logger, (req, res) => {
//   res.send('About');
// });

// app.get('/api/people', (req, res) => {
//   res.status(200).json({ success: true, data: people });
// });

// app.post('/api/people', (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: 'Please provide name value!' });
//   }
//   console.log(req.body.name);
// people.push({ id: people.length + 1, name: req.body.name });
//   res.status(201).json({ success: true, name: req.body.name });
// });
app.post('/api/postman/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});
app.post('/login', (req, res) => {
  const { name } = req.body;
  console.log(req.body);
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  res.status(400).json({ success: false, msg: 'please provide name value' });
});
// app.get('/api/v1/products/:productID', (req, res) => {
//   const { productID } = req.params;
//   const singleProduct = products.find(
//     (product) => product.id === parseInt(productID)
//   );
//   if (!singleProduct) {
//     console.log(res.statusCode);
//     return res.status(404).send(res.statusCode, 'That product was not found');
//   }

//   return res.json(singleProduct);
// });

//setup static and middleware
// app.use(express.static('./public'));
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './public/index.html'));
// });
// app.get('/api/v1/test', (req, res) => {
//   res.json({ message: 'It worked!' });
// });
// app.get('/api/v1/products', (req, res) => {
//   res.json({ message: 'It worked!' });
//   res.sendFile(path.resolve(__dirname, './data.js'));
//   res.json(products);
// });
// app.get('/api/v1/products', (req, res) => {
//   const newProducts = products.map((product) => {
//     const { id, name, price } = product;
//     return { id, name, price };
//   });
//   res.json(newProducts);
// });
// app.get('/', (req, res) => {
//   console.log('user hit the resource');
//   res.status(200).send('Home Page');
// });
// app.get('/about', (req, res) => {
//   res.status(200).send('About Page');
// });
// app.all('*', (req, res) => {
//   res.status(404).send('<h1>resource not found</h1>');
// });

// app.get('/api/v1/query', (req, res) => {
//   //   console.log(req.query);
//   const { search, limit } = req.query;
//   let sortedProducts = [...products];
//   if (search) {
//     sortedProducts = sortedProducts.filter((product) => {
//       //   return product.name.startsWith(search);
//       return product.name.includes(search);
//     });
//   }
//   if (limit) {
//     sortedProducts = sortedProducts.slice(0, Number(limit));
//   }
//   if (sortedProducts.length < 1) {
// res.status(200).send('no products matched your search');
//   res.status(200).json({ success: true, data: [] });
// }

// res.status(200).json(sortedProducts);
//   res.send('Hello World!');
// });

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
