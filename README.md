# Boggle Page

> Simple stand alone server with boggle solver running as API

[![NPM][boggle-connect-icon]][boggle-connect-url]

[![Build status][boggle-connect-ci-image]][boggle-connect-ci-url]

## Install and run

Requires nodejs

    npm install
    // installs all necessary dependencies
    node index.js
    // starts the local webserver

Then open a modern browser and navigate to the server, usually
at [http://localhost:3000/](http://localhost:3000/)

## Dependencies

The web server is a [connect](https://github.com/senchalabs/connect) server
with actual Boggle solver through [boggle](https://npmjs.org/package/boggle).

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

[boggle-connect-icon]: https://nodei.co/npm/boggle-connect.svg?downloads=true
[boggle-connect-url]: https://npmjs.org/package/boggle-connect
[boggle-connect-ci-image]: https://travis-ci.org/bahmutov/boggle-connect.svg?branch=master
[boggle-connect-ci-url]: https://travis-ci.org/bahmutov/boggle-connect
