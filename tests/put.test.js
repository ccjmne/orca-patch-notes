'use strict';

const api = require('./api.dev');

const body = `
# orca-patch-notes

Serverless application distributing patch notes for [NCLS Development's Orca solution](https://www.orca-solution.com).

The project is packaged into an [AWS CloudFormation](https://aws.amazon.com/cloudformation/) stack that contains:

 - an [AWS API Gateway](https://aws.amazon.com/api-gateway/) API with a single resource (\`/{version}\`) exposing its \`GET\`, \`PUT\` and \`DELETE\` methods to:
 - a collection of [AWS Lambda](https://aws.amazon.com/lambda/) functions that manipulate data stored in:
 - a single [AWS DynamoDB](https://aws.amazon.com/dynamodb/) table

## See also

[\`orca-patch-notes-editor\`](https://github.com/ccjmne/orca-patch-notes-editor)

Web application for editing and publishing patch notes for NCLS Development's Orca solution.
`.trim();

/**
 * Path: patch-notes/1.1.5
 */
api.put({
  'headers': null,
  'pathParameters': { 'version': '1.1.5' },
  'body': body
}, {}, console.log.bind(console)); // %%

/**
 * Path: patch-notes/1.asdf.5
 */
api.put({
  'headers': null,
  'pathParameters': { 'version': '1.asdf.5' },
  'body': body
}, {}, console.log.bind(console)); // %%

/**
 * Path: patch-notes/1.1.5
 * Body: null
 */
api.put({
  'headers': null,
  'pathParameters': { 'version': '1.1.5' }
}, {}, console.log.bind(console)); // %%
