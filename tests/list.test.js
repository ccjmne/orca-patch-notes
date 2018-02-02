'use strict';

const api = require('./api.dev');

// patch-notes/?version=1.1.5&previous=true
api.list({
  'headers': null,
  'queryStringParameters': { 'version': '1.1.5', 'previous': true }
}, {}, console.log.bind(console)); // %%

// patch-notes/
api.list({
  'headers': null
}, {}, console.log.bind(console)); // %%

// patch-notes/?version=1.1.5
api.list({
  'headers': null,
  'queryStringParameters': { 'version': '1.1.5' }
}, {}, console.log.bind(console)); // %%

// patch-notes/?version=1.asdf.5
api.list({
  'headers': null,
  'queryStringParameters': { 'version': '1.asdf.5' }
}, {}, console.log.bind(console)); // %%
