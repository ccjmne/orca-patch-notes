'use strict';

const api = require('./api.dev');

// DELETE patch-notes/1.1.5
api.delete({
  'headers': null,
  'pathParameters': { 'version': '1.1.5' }
}, {}, console.log.bind(console)); // %%

// DELETE patch-notes/
api.delete({
  'headers': null
}, {}, console.log.bind(console)); // %%

// DELETE patch-notes/1.asdf.5
api.delete({
  'headers': null,
  'pathParameters': { 'version': '1.asdf.5' }
}, {}, console.log.bind(console)); // %%
