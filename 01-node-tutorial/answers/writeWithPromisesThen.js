const { writeFile, readFile } = require('fs').promises;

//create async funk writer
// const writer = async () => {
//   try {
// const threeLine = 'Start \nProcess \nFinish \n';
writeFile('./temporary/temp.txt', 'Start1 \n', { flag: 'w' })
  .then(() => {
    return writeFile('./temporary/temp.txt', 'Process1 \n', { flag: 'a' });
  })
  .then(() => {
    return writeFile('./temporary/temp.txt', 'Finish1 \n', { flag: 'a' });
  })
  .catch((err) => {
    console.log('An error occurred: ', err);
  });
