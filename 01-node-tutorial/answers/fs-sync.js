const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

// const first = readFileSync('../content/first.txt', 'utf8');
// const second = readFileSync('../content/second.txt', 'utf8');
const line1 = 'I';
const line2 = 'love';
const line3 = 'NODEJS';
// Get the absolute path to the file using __dirname
const filePath = path.join(__dirname, 'temporary', 'fileA.txt');
writeFileSync(filePath, line1, { flag: 'w' });
console.log('first line!');
writeFileSync(filePath, line2, { flag: 'a' });
console.log('second line!');
writeFileSync(filePath, line3, { flag: 'a' });
console.log('third line!');
readFileSync(filePath, 'utf8');
console.log(line1, line2, line3);
