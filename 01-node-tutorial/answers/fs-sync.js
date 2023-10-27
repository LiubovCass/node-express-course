const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('../content/first.txt', 'utf8');
const second = readFileSync('../content/second.txt', 'utf8');

writeFileSync(
  './temporary/fileA.txt',
  { flag: 'a' },
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' }
);
console.log(first, second);
