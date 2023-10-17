const { createReadStream } = require('fs');

let counter = 0;
let stream = createReadStream('../content/big.txt', 'utf8', 200);

stream.on('data', (msg) => {
  counter++;
  console.log(msg);
});
stream.on('end', () => {
  console.log(counter);
});
stream.on('error', () => {
  console.log(error);
});
