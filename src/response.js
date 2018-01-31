'use strict';

module.exports = function Response(body = '', status = 200) {
  this.statusCode = status;
  this.isBase64Encoded = false;
  this.body = JSON.stringify((typeof body === 'string') ? { message: body } : body, null, 2);
  this.headers = {
    'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token',
    'Access-Control-Allow-Origin': '*'
  };

  Response.prototype.noCORS = function () {
    return delete this.headers, this;
  };
};
