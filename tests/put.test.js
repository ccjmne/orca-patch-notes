'use strict';

var api = require('./api.dev');

/**
 * Path: patch-notes/1.1.5
 * Body: { "name": "eric", "age": 27 }
 */
api.put({
  'headers': null,
  'pathParameters': { 'version': '1.1.5' },
  'body': JSON.stringify({ name: 'eric', age: 27 }, null, 2)
}, {}, console.log.bind(console)); // %%

/**
 * Path: patch-notes/1.asdf.5
 * Body: { "name": "eric", "age": 27 }
 */
api.put({
  'headers': null,
  'pathParameters': { 'version': '1.asdf.5' },
  'body': JSON.stringify({ name: 'eric', age: 27 }, null, 2)
}, {}, console.log.bind(console)); // %%

/**
 * Path: patch-notes/1.1.5
 * Body: null
 */
api.put({
  'headers': null,
  'pathParameters': { 'version': '1.1.5' }
}, {}, console.log.bind(console)); // %%
