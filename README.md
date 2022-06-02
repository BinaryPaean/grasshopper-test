<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

A demonstration nestjs based endpoint that provides a limited API.

## Installation

clone this repository.
configure a .env file in the project root with the following variables set.

```bash
DATABASE_USER=postgres
DATABASE_PASSWORD=XXX
DATABASE_NAME=postgres
DATABASE_PORT=5432
DATABASE_HOST=localhost
SERVER_PORT=3000 
```
Assign your own unique password for the database which will be pulled into the relevant docker configs as well.
You may optionally assign different database user, or name as desired.

Finally, be aware that the host should be 'localhost' for local development (e.g. npm run start:dev) but should be the database container name ('postgres') if you wish to use the build container.

## Running the app

### Option 1: Local Dev

 1. '$ npm install' to bring in dependencies
 1. Ensure you have set 'DATABASE_HOST=localhost' in the .env file.
 2. Start the postgres docker container with:

```bash
docker-compose -f local-dev-docker-compose.yaml
```
Then, use any common npm scripts for launching the nestjs application

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

### Option 2: Containerized Dev

 1. Ensure you have set 'DATABASE_HOST=postgres' in the .env file. (or to whatever you have renamed the database container)
 2. Start the build and execution container(s) using the default docker-compose file via:
 
```bash
docker-compose up
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


## Issues

https://github.com/typeorm/typeorm/issues/8810