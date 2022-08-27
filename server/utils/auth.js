const jwt = require('jsonwebtoken');

const secret = 'grooooooooove';
const expiration = '1d';

module.exports = {
  apolloContext: function ({ req }) {
    console.log("REQEUST CAME IN", req.headers.authorization);
    return req.headers.authorization ? jwt.verify(req.headers.authorization.replace(`Bearer `, ''), secret) : null;
  },
  //but got to make sure that pay
  signToken: function (payload) {
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  verifyToken: function (token) {
    return jwt.verify(token, secret);
  }
};
