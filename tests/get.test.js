'use strict';

var api = require('./api.dev');

// patch-notes/1.1.5?previous=true
api.get({
  'headers': null,
  'queryStringParameters': { 'previous': true },
  'pathParameters': { 'version': '1.1.5' }
}, {}, console.log.bind(console)); // %%

// patch-notes/
api.get({
  'headers': null
}, {}, console.log.bind(console)); // %%

// patch-notes/1.1.5
api.get({
  'headers': null,
  'pathParameters': { 'version': '1.1.5' }
}, {}, console.log.bind(console)); // %%

// patch-notes/1.asdf.5
api.get({
  'headers': null,
  'pathParameters': { 'version': '1.asdf.5' }
}, {}, console.log.bind(console)); // %%
