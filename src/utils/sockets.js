import openSocket from 'socket.io-client';

export const connectToSocket = () => {
  const socket = openSocket(`http://${window.location.hostname || 'localhost'}:8000`);
  return socket;
};

export const listenForMessages = (socket, receiveMessage) => {
  // listen on socket for new messages, call receiveMessage with any received messages
  receiveMessage({ body: 'fake live message' });
  socket.on('message', message => {
    receiveMessage(message);
  });
};

export const emitMessage = (socket, message) => {
  socket.emit('message', message);
};
