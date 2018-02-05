# orca-patch-notes

Serverless application distributing patch notes for [NCLS Development's Orca solution](https://www.orca-solution.com).

The project is packaged into an [AWS CloudFormation](https://aws.amazon.com/cloudformation/) stack that contains:

- an [AWS API Gateway](https://aws.amazon.com/api-gateway/) API with a single resource (`/{version}`) exposing its `GET`, `PUT` and `DELETE` methods to:
- a collection of [AWS Lambda](https://aws.amazon.com/lambda/) functions that manipulate data stored in:
- a single [AWS DynamoDB](https://aws.amazon.com/dynamodb/) table

## See also

[`orca-patch-notes-editor`](https://github.com/ccjmne/orca-patch-notes-editor)

The [Angular 5](https://angular.io/) web application for editing and publishing patch notes as a front-end to this API.

## TODO

- [x] Develop an editor to write up the patch notes
- [ ] Restrict access to `PUT` and `DELETE` methods
- [ ] Set up DNS records to expose the API behind a human-readable URL
- [ ] ~~Use Swagger to describe the API~~
- [ ] Re-implement CORS the proper way (as soon as awslabs/serverless-application-model#248 is resolved)

## Development

Set up the development environment using:

```
npm install
```

You will also need to have installed both **Webpack** and the **AWS CLI**:

1. For **Webpack**, `npm install -g webpack`
2. For the **AWS CLI**, refer to [Installing the AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)

## Build & Deploy

The building/deployment operation is done in three steps: a **`webpack` build**, a **`cloudformation package`ing** and a **`cloudformation deploy`ment**.

1. **Webpack build**

  ```
  npm run build
  ```

  This step will create a **minified** `dist/index.js` build, excluding node packages available from **AWS Lambda**.

2. **CloudFormation packaging**

  ```
  npm run package
  ```

  This step will:

  - Zip the `dist/index.js` file
  - Upload it to an **AWS S3** bucket
  - Add a `CodeUri` property, specifying the location of the zip file in the bucket for each function in `app-spec.yaml`
  - Generate an updated `dist/app-spec.packaged.yaml`

3. **CloudFormation Deployment**

  ```
  npm run deploy
  ```

  This step will:

  - Call the **CloudFormation** `CreateChangeSet` operation with `dist/app-spec.packaged.yaml`
  - Call the **CloudFormation** `ExecuteChangeSet` operation with the name of the `changeset` newly created
