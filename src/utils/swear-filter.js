const Filter = require('bad-words');
const customFilter = new Filter({ placeHolder: 'x' });

const swearFilter = message => {
  const filteredMessage = customFilter.clean(message);
  return filteredMessage;
};

module.exports = { swearFilter };
