'use strict';

module.exports = function (event) {
  this.getPathParameter = name => event.pathParameters && event.pathParameters[name];
  this.getQueryParameter = name => event.queryStringParameters && event.queryStringParameters[name];
  this.getBody = () => typeof event.body === 'object' ? event.body : JSON.parse(event.body);
};
