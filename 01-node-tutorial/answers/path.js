const path = require('path');

console.log(path.sep);
const testPath = path.join('/content', 'subfolder', 'test.txt');
console.log(testPath);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
