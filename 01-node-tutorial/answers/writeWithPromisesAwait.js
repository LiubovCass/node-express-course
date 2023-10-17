const { writeFile, readFile } = require('fs').promises;

//create async funk writer
const writer = async () => {
  try {
    await writeFile('./temporary/temp.txt', 'Start \n', { flag: 'w' });
    await writeFile('./temporary/temp.txt', 'Process \n', { flag: 'a' });
    await writeFile('./temporary/temp.txt', 'Finish', { flag: 'a' });

    console.log('Has been written successfully!');
  } catch (err) {
    console.log('An error occurred: ', err);
  }
};
const reader = async () => {
  try {
    // Read the contents of the file
    const data = await readFile('./temporary/temp.txt', 'utf8');

    console.log(data);
  } catch (error) {
    console.log('An error occurred: ', err);
  }
};
const readWrite = async () => {
  await writer();
  await reader();
};
readWrite();
