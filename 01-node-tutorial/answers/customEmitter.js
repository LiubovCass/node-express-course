const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.on('hello', () => {
  console.log('Hello there');
});

setInterval(() => {
  emitter.emit('timer', 'How old are you?');
}, 2000);

emitter.emit('hello');
emitter.on('timer', (msg) => console.log(msg));
