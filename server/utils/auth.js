const jwt = require('jsonwebtoken');

<<<<<<< HEAD
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
=======
const secret = 'grooooooooove';
const expiration = '4h';

module.exports = {
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
>>>>>>> 7ecea544d448bcba1d854cb1cdc0e4efdd0438db
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
