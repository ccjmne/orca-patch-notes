'use strict';

module.exports = function (body = '', status = 200) {
  this.statusCode = status;
  this.isBase64Encoded = false;
  this.body = JSON.stringify((typeof body === 'string') ? { message: body } : body, null, 2);
};
