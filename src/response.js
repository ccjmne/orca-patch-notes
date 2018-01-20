'use strict';

module.exports = function (body = '', status = 200) {
  this.statusCode = status;
  this.isBase64Encoded = false;
  this.body = JSON.stringify(body, null, 2);
};
