// const { setDefaultResultOrder } = require('dns');
const { readFile, writeFile } = require('fs');
console.log('start');
readFile('../content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('../content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './temporary/fileB.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        console.log('done with this task');
      }
    );
  });
});
console.log('starting next task');
