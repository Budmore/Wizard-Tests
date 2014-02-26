Navigation Rules
=================

Launching project:
---
http://gruntjs.com/getting-started#installing-the-cli


`npm install -g grunt-cli`
`npm install`
`grunt`



Unit tests
---
To run Angular unit tests (spec) run scripts/run_test.sh (Linux) or scripts/run_test.bat (Windows)

  Karma (previous: Testacular) is required

  * Linux:
    npm install -g karma karma-coverage

  * Windows:
  Download NodeJS for Windows (exec or installer): http://nodejs.org/download/
  Download NPM for Windows: http://nodejs.org/dist/npm/npm-1.3.9.zip
  Run: npm.cmd install -g karma
  cd SaasManager-Web
  scripts\run_test.bat

  Another option is to put karma executable in PATH, and then run (in SaasManager-Web):
  karma start config/karma.conf.js
