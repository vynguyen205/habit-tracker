const jwt = require('jsonwebtoken');

const secret = 'grooooooooove';
const expiration = '4h';

module.exports = {
  apolloContext: function ({ req }) {
    console.log("REQEUST CAME IN", req.headers.authorization);
    return req.headers.authorization ? jwt.verify(req.headers.authorization.replace(`Bearer `, ''), secret) : null;
  },
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  verifyToken: function (token) {
    return jwt.verify(token, secret);
  }
};