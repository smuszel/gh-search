### Hello :wave:

This is simplified version of github user search functioanlity.
Thanks to following features this can serve as a boilerplate for larger project

* [x] build configuration with webpack & babel
* [x] linting with prettier & eslint
* [x] e2e and visual regression testing with cypress
* [x] typescript
* [x] redux with hooks setup
* [x] jss styles

### How to run locally

* clone the repo 
* `npm install`
* `npm run start`
* open browser under http://localhost:8080

### How to run tests

CLI:
* `npm run start`
* under separate window `npm run test`

GUI: 
* `npm run start`
* under separate window `npm run cy`

Be aware that https://github.com/cypress-io/cypress/issues/2102 is still opened
so it is advised to runthe `visual.spec.js` either from gui or cli

### :point_right: [Demo](https://smuszel.github.io/gh-search/dist/)
