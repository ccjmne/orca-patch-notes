'use strict';

module.exports = function Request(event) {
  function findIn(type) {
    return (name) => event[type] && event[type][name] && decodeURIComponent(event[type][name]);
  }

  this.getPathParameter = findIn('pathParameters');
  this.getQueryParameter = findIn('queryStringParameters');
  this.getBody = () => event.body;
};
