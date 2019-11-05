# Passion.io Recruitment Task

### Description

This is the web client for Passion.io recruitment task. This app offers a simple functionality of interacting between 3 models: `Vertical`, `Category` and `Course`. Authenticated user can add categories and courses. User can also delete categories and his/her own courses. After a course is created, an email notification is sent to all users. NOTE: This does not work in remote environment - in order for this to work, external mail provider like Mailchimp or Mailjet would need to be added.


#### Possible improvements

* displaying course `Delete` button only to record owner

### Technology stack

* Vue 2.9.6

## Prerequisites

You will need the following things properly installed on your computer:

* Node.JS (preferable `v13.0.1`)
* npm (`npm install npm@latest -g`)

## Installation

`npm install`

## Running / Development

You need to run Rails application first. For instructions please refer to [github.com/szmelc/passion_io_backend](https://github.com/szmelc/passion_io_backend)

`npm run dev`

Access the app at `http://localhost:8080`.

## API (backend)

API is built with Rails and [grape](https://github.com/intridea/grape) gem and authentication is handled with [doorkeeper](https://github.com/doorkeeper-gem/doorkeeper) gem by [Resource Owner Password Credentials Grant](https://oauthlib.readthedocs.io/en/latest/oauth2/grants/password.html).

API documentation is generated with [grape-swagger](https://github.com/tim-vandecasteele/grape-swagger) gem and is available under `http://localhost:3000/docs`

In order to use API endpoints, resource owner authentication token is required. You can obtain the token by:

```bash
  curl -F grant_type=password \
  -F email=YOUR@EMAIL.COM \
  -F password=YOUR_PASSWORD \
  -X POST http://localhost:3000/oauth/token
```

The response will contain both `access_token` and `refresh_token`.

**NOTE**: Please replace host with an address relevant for [the environment](#api-backend).

To authenticate API calls to any endpoint that is protected with access token, pass `Authorization` header into the request as follows:

`-H 'Authorization: Bearer ACCESS_TOKEN'`

### Sample User

After running seed data in Rails app, a test user will be present in the database. Authentication can be performed with following credentials:

```bash
login: test@test.com
password: 123123
```

## Remote Environment

The application is hosted on AWS and is available at [passion-io-app.s3-website.eu-central-1.amazonaws.com/](http://passion-io-app.s3-website.eu-central-1.amazonaws.com/).

To access API documentation, please go to [API docs](https://evening-stream-34331.herokuapp.com/docs).

#### URLs

|      environment      |                                               url                                              |
|:---------------------:|:----------------------------------------------------------------------------------------------:|
|       production         |       [passion-io-app.s3-website.eu-central-1.amazonaws.com/](http://passion-io-app.s3-website.eu-central-1.amazonaws.com/)       |
