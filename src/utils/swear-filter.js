const Filter = require('bad-words');
const customFilter = new Filter({ placeHolder: 'x'})

export const swearFilter = (message) => {
  const filteredMessage = customFilter.clean(message);
  return filteredMessage;
}