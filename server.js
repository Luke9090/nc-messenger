const io = require('socket.io')();

io.on('connection', client => {
  console.log('client connected');
  client.on('disconnect', client => {
    console.log('client disconnected');
  });
  client.on('message', message => {
    io.emit('message', message);
  });
});

const port = 8000;
io.listen(port);
console.log(`listening on port ${port}`);
