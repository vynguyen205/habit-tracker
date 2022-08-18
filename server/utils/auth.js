const jwt = require('jsonwebtoken');

const secret = 'grooooooooove';
const expiration = '4h';

module.exports = {
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};