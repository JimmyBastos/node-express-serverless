## Description

Build express apps on top of AWS Lambda with serverless architectures 

## Enviroment

```bash
$ cp .env.example .env
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# dev mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Deploy

```bash
# dev deploy
$ npm run deploy:dev

# production deplou
$ npm run deploy:prod
```

## AWS Policies

Here are the policies you have to attach to your User/CodePipeLineRole to be able to deploy using CloudFormation.

- AWSLambdaFullAccess
- AmazonS3FullAccess
- IAMFullAccess
- CloudWatchFullAccess
- AmazonAPIGatewayAdministrator (v2)
- CloudFormationAdministrator

## Todos

- [ ] Amazon EFS integration for node_modules storage
- [ ] Dinamically load .env variables on aws codebuild
