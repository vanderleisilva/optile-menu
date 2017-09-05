[![Build Status](https://travis-ci.org/vanderleisilva/optile-menu.svg?branch=master)](https://travis-ci.org/vanderleisilva/optile-menu)

# README #

This repo is created as a public read-only resource for coding challenges during the hiring process at optile.
For more information please visit https://www.optile.net/unternehmen/karriere/


## Local configuration
Install npm dependencies.
```sh
$ yarn install
```
Duplicate the file: **server/env.sample** and rename to **server/env.js**
In the **en.js** file add your slackbot token 

### Run tests.
```sh
$ npm test
```
### Run backend server.
```sh
$ node server
```
### Run frontend development server (run simultaneously with backend server).
```sh
$ npm start
```

#### On slack with the slackbot chat ask him:

**what's for lunch?**
And then your're going to have your menu without leaving your seat ;)