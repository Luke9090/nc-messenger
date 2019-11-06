import openSocket from 'socket.io-client';

export const connectToSocket = sendNewMessage => {
  const socket = openSocket('http://localhost:8000');
  return socket;
};

export const listenForMessages = (socket, sendNewMessage) => {
  // listen on socket for new messages, call sendNewMessage with any received messages
  sendNewMessage({ body: 'fake live message' });
  socket.on('message', message => {
    sendNewMessage(message);
  });
};

export const emitMessage = (socket, message) => {
  socket.emit('message', message);
};
