const express = require('express');
const path = require('path');
const app = express();
const { products } = require('./data.js');

app.get('/api/v1/products/:productID', (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === parseInt(productID)
  );
  if (!singleProduct) {
    console.log(res.statusCode);
    return res.status(404).send(res.statusCode, 'That product was not found');
  }

  return res.json(singleProduct);
});

//setup static and middleware
app.use(express.static('./public'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});
// app.get('/api/v1/test', (req, res) => {
//   res.json({ message: 'It worked!' });
// });
app.get('/api/v1/products', (req, res) => {
  //   res.json({ message: 'It worked!' });
  res.sendFile(path.resolve(__dirname, './data.js'));
  res.json(products);
});
app.get('/api/v1/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, price } = product;
    return { id, name, price };
  });
  res.json(newProducts);
});
app.get('/', (req, res) => {
  console.log('user hit the resource');
  res.status(200).send('Home Page');
});
app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});
// app.all('*', (req, res) => {
//   res.status(404).send('<h1>resource not found</h1>');
// });

app.get('/api/v1/query', (req, res) => {
  //   console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      //   return product.name.startsWith(search);
      return product.name.includes(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(sortedProducts);
  //   res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
