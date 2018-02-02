'use strict';

const lib = require('./src/lib');
const Response = require('./src/response');
const Request = require('./src/request');

/**
 * Method: GET
 * Path: /patch-notes/
 * Query Parameters:
 * - version: string
 * - previous: Boolean
 * Return:
 *   Latest release notes for specified version, or latest altogether in no version specified.
 *   If `previous` is set, also includes all the patch notes leading to that version.
 **/
exports.list = function (event, context, callback) {
  try {
    const request = new Request(event);
    return lib.listRelevantPatchNotes(request.getQueryParameter('version'), !!request.getQueryParameter('previous'))
      .then(data => callback(null, new Response(data)));
  } catch (e) {
    return Promise.resolve(callback(null, new Response(e.message, 400)));
  }
};

/**
 * Method: PUT
 * Path: /patch-notes/{version}
 * Return: 201 Created
 **/
exports.put = function (event, context, callback) {
  try {
    const request = new Request(event);
    return lib.put(request.getPathParameter('version'), request.getBody())
      .then(data => callback(null, new Response(data, 201)));
  } catch (e) {
    return Promise.resolve(callback(null, new Response(e.message, 400)));
  }
};

/**
 * Method: DELETE
 * Path: /patch-notes/{version}
 * Return: 204 No Content
 **/
exports.delete = function (event, context, callback) {
  try {
    const request = new Request(event);
    return lib.delete(request.getPathParameter('version'))
      .then(data => callback(null, new Response(data, 204)));
  } catch (e) {
    return Promise.resolve(callback(null, new Response(e.message, 400)));
  }
};
