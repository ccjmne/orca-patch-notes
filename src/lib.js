'use strict';

const region = 'eu-west-1';
const tableName = process.env.TABLE_NAME;

const AWS = require('aws-sdk');
AWS.config.update({ region: region });
const doc = require('dynamodb-doc');
const dynamo = new doc.DynamoDB(new AWS.DynamoDB());
const semver = require('semver');

/**
 * The version is valid if:
 * - it actually sematically is, or:
 * - `required` is falsy and so is `version`
 **/
function validateVersion(version, required = true) {
  if (semver.valid(version) || (!required && !version)) {
    return Promise.resolve();
  }

  throw new Error(`Invalid version number: ${version}`);
}

function validateContents(contents) {
  if (!!contents) {
    return Promise.resolve();
  }

  throw new Error(`Patch notes contents cannot be empty`);
}

function get(version) {
  return validateVersion(version).then(() => dynamo.getItem({ 'TableName': tableName, 'Key': { version: version } }).promise())
    .then(response => {
      if (response.Item) {
        return response.Item;
      }

      throw new Error(`No patch notes matching version number: ${version}`);
    });
}

function del(version) {
  return validateVersion(version).then(() => dynamo.deleteItem({ 'TableName': tableName, 'Key': { version: version } }).promise());
}

function put(version, contents) {
  return validateVersion(version).then(validateContents(contents)).then(() => dynamo.putItem({
    'TableName': tableName,
    'Item': {
      version: semver.clean(version),
      timestamp: new Date().getTime(),
      contents: contents
    }
  }).promise());
}

/**
 * Returns latest patch notes for specified version, or latest overall if no version number specified.
 * Includes previous versions' patch notes (ordered by descending version number) iff `includePrevious` is truthy.
 **/
function listRelevantPatchNotes(version, includePrevious) {
  return validateVersion(version, false).then(() =>
    dynamo.scan({ 'TableName': tableName }).promise().then(response => response.Items)
    .then(items => items
      .filter(version ? entry => semver.valid(entry.version) && semver.lte(entry.version, version) : () => true)
      .sort((x, y) => semver.rcompare(x.version, y.version)))
    .then(items => includePrevious ? items : items[0]));
}

module.exports = {
  get: get,
  put: put,
  delete: del,
  listRelevantPatchNotes: listRelevantPatchNotes
};
