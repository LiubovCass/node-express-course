const { writeFile } = require('fs');
const path = require('path');
console.log('start');
// Get the absolute path to the file using __dirname
const filePath = path.join(__dirname, 'temporary', 'fileB.txt');
writeFile(filePath, 'Here is line 1', { flag: 'w' }, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
    console.log('done with line 1');
    writeFile(filePath, 'Here is line 2', { flag: 'a' }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        console.log('done with line 2');
        writeFile(filePath, 'Here is line 3', { flag: 'a' }, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
            console.log('done with line 3');
          }
          console.log('finish');
        });
      }
    });
  }
});
