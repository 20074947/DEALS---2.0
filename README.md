# Assignment 2 - Automated development process.

Name: Tarek Huawei

Student No.: 20074947

## Overview.

 + Introduction:

As money is becoming more and more important people are looking for more ways to save but still want to enjoy every aspect of life. People are looking for the best deals or offers firstly for a good price and secondly for good quality.
They are looking for different categories such as food, leisure, entertainment, beauty, health and holiday breaks.
This web site will provide a map or list of Irish cities, from this you can choose which city or region you are interested in and a filter will be available so you can choose which category, all details of the deals will be clearly seen on the web site. With this web site, everyone will able to add, modify, delete a deal and choose which category the deal will be in. Also, for the development of this web site JavaScript as development language will be used.
Finally, this web site will be effortless and clear to use. 

+ What this repo demonstrates in relation to agile software process automation(the nature of the app used  as the context for demonstrating the automation tools):

This individual project will build on the knowledge gained in this semester, to develop a Web Application that, ideally, should have the following components: AngularJS; NodeJS; and MongoDb; and Use an integrated tool-chain to automate the various stages of the Agile development process for a full-stack web application.

Features of the automation include:
  - Testing
  - Source control
  - Code Quality reports
  - Application Build
  - Continuous Integration
  - Auto deployment

## Environment.

  - AngularJS Front End Client
  - NodeJS Back End Server
  - Persistence in the form of a back-end Database (MongoDb)

## Build automation.

The purpose of this is to demonstrate that npm scripts can be used as a tool to support the build process for an application, in our case a web application comprised of an Angular SPA and Web API. 

+ Build scripts:

Replace the entire scripts section of "package.json" with the following:

    "api:dev": "npm-run-all --parallel lint:watch test:watch server",
    "start": "npm-run-all --parallel lint:watch test:watch build:dev",
    "build:prod": "npm-run-all clean-dist webpack --config webpack-prod.config.js",
    "test:watch": "npm run test -- --watch",     
    "clean": "npm-run-all clean-build clean-dist",
    "lint:watch": "npm run lint -- --watch",
     "prebuild:dev": "npm-run-all clean-build",
    "postbuild:dev": "npm run server",
    "build:dev": "webpack",
    "clean-build": "rimraf ./build && mkdir build",
    "clean-dist": "rimraf ./dist && mkdir dist",
    "lint": "esw ./public/javascript/**/*.js ./test ./routes ./models/",
    "test": "cross-env NODE_ENV=test PORT=4000 mocha test/routes/deals-test.js", 
    "server": "nodemon bin/www"

## Acceptance Testing.

Acceptance Testing is a level of the software testing where a system is tested for acceptability. The purpose of this test is to evaluate the system's compliance with the business requirements and assess whether it is acceptable for delivery.


## Continuous Integration.

Travis CI Link: https://travis-ci.org/20074947/DEALS---2.0

## Coveralls.

Coveralls link: https://coveralls.io/github/20074947/DEALS---2.0

## API endpoints.

+ GET /deals - get all the deals
+ GET /deals/:id - get a deal with a specifi id
+ POST /deals - add a deal
+ PUT /deals/:id/price - Update deal's price
+ DELETE /deals/:id - Delete a deal with a specific id

## Sample Test execution.

  $ npm test



        $ npm test

        > deals-2.0@0.0.0 test C:\Users\Kamel\WebStorm 2017.2.4\SSD\DEALS - 2.0
        > cross-env NODE_ENV=test PORT=4000 mocha test/routes/deals-test.js



        Deals
    GET /deals
     GET /deals 200 30.298 ms - 381
         √ should return all the deals in an array (167ms)
     POST /deals
       POST /deals 200 82.677 ms - 25
       √ should return confirmation message and update datastore (110ms)
     PUT /deals/:id/price
       PUT /deals/1000001/price 200 5.256 ms - 548
       √ should return all deals with specified deal updated
       PUT /deals/1100001/price 404 1.844 ms - 30
       √ should return a 404 status and message for invalid deal id
     DELETE /deals/:id
       DELETE /deals/1000001 200 1.506 ms - 27
       √ should delete deal with a valid id
       DELETE /deals/1100001 200 1.744 ms - 27
       √ should return a 404 status for invalid deal id to delete
     GET /deals/:id
       GET /deals/1000000 200 3.061 ms - 188
       √ should return a specific deal with a valid id
       GET /deals/1100001 404 1.456 ms - 29
       √ should return a 404 status and message for invalid deal id


       8 passing (1s)

## git branches.

      acceptance-test
      buildTasks
      cssbundle
      development
      * master
      prodbuild
      remotes/origin/acceptance-test
      remotes/origin/development
      remotes/origin/master
      remotes/origins/development
      remotes/origins/master


## Heroku.

Link: https://dashboard.heroku.com/apps/still-mesa-66808

## Extra features.

+ Code Quality
+ Exception testing
+ Branch-Edit-Merge workflow