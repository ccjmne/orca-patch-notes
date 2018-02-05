'use strict';

const api = require('./api.dev');

// patch-notes/1.1.5
api.get({
  'headers': null,
  'pathParameters': { 'version': '1.1.5' }
}, {}, console.log.bind(console)); // %%

// patch-notes/1.1.5
api.get({
  'headers': null,
  'pathParameters': { 'version': '999.999.999' }
}, {}, console.log.bind(console)); // %%

// patch-notes/1.asdf.5
api.get({
  'headers': null,
  'pathParameters': { 'version': '1.asdf.5' }
}, {}, console.log.bind(console)); // %%
