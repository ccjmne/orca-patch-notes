'use strict';

module.exports = function (event) {
  this.getPathParameter = name => event.pathParameters && event.pathParameters[name];
  this.getQueryParameter = name => event.queryStringParameters && event.queryStringParameters[name];
  this.getBody = () => event.body;
};
