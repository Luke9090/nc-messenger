export const getStoredMessages = () => {
  return Promise.resolve([{ body: 'Stored message 1' }, { body: 'Another stored message' }, { body: 'Final stored message' }]);
};
