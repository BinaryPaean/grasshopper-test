<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

A demonstration NestJS-based endpoint that provides 4 get endpoints as an API.

## Installation

clone this repository.
create an .env file in the project root with the following variables set:

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
 2. Ensure you have set 'DATABASE_HOST=localhost' in the .env file.
 3. Start the postgres docker container with:
 4. Run the TypeORM migrations to set up the database.

```bash
docker-compose -f local-dev-docker-compose.yaml -d
```
Then, use NestJS-provided npm scripts for launching the nestjs application:

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

### Option 2: Containerized Dev

 1. Set 'DATABASE_HOST=postgres' in your .env file. 
 2. Start the build and execution container(s) using the default docker-compose file via:
 3. Run the TypeORM migrations against the DB (if you didn't already do so).
 
```bash
docker-compose up
```
This will set running a dev-mode container you can connect to if you don't want to or can't configure a satisfactory dev environment on your local machine. You'll still want to edit files locally, though!

### Option 3: Building for Production

1. Update the .env file to reflect production values for the database.
2. Use the dockerfile to build an image:
3. Run the image on your "production" host.

```bash
docker build -t <whateverImageNameYoulike>
```

## Is it any Good?
[no](https://news.ycombinator.com/item?id=3067434)

## What else Should be Done to Make this Code Legit?

So many things. Tests wouldn't be a bad start. Plumbing in facilities for whatever team logging systems are used would be another. State codes could be validated against a whitelist of real geographic areas (Ex: ISO 3166-2 and related, if international). It could also stand to have some more boilerplate code created by NestJS scaffolding stripped out. It could be improved greatly to handle the combining of standard environmental variables and .env vars better - especially by including support for separate .env and .env.dev files. Finally, if you want to put it behind a proxy for some inexplicable reason, the throttler should be reconfigured.

## License

Nest is [MIT licensed](LICENSE). This project itself is [WTFPL](License.txt) 

## Issues

If you run around updating TypeORM, watch out for this doozie.
https://github.com/typeorm/typeorm/issues/8810