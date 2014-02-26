SaasManager-Web
===============

Zmiany
---
Bootstrap 3.0!
LESS - nie wrzucamy do repozytorium plikow css
Grunt
indykacja - taby zamiast spacji
nomenklatura - service z malych liter bez $,






Launching project - start working with Grunt:

---
http://gruntjs.com/getting-started#installing-the-cli
1) npm install -g grunt-cli
2) Change to the project's root directory.
3) Install project dependencies with npm install.
4) Run Grunt with grunt.



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
