const io = require('socket.io')();
const { swearFilter } = require('./src/utils/swear-filter');

io.on('connection', client => {
  console.log('client connected');
  client.on('disconnect', client => {
    console.log('client disconnected');
  });
  client.on('message', message => {
    io.emit('message', { ...message, body: swearFilter(message.body) });
  });
});

const port = 8000;
io.listen(port);
console.log(`listening on port ${port}`);
