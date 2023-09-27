const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in sec

console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  hostName: os.hostname(),
  type: os.type(),
};
console.log(currentOS);
