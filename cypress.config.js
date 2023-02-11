const { defineConfig } = require("cypress");
const browserify = require('@cypress/browserify-preprocessor');

module.exports = defineConfig({
  viewportWidth: 1078,
  viewportHeight: 660,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  env: {
    base_url: "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
  },
  e2e: {
    setupNodeEvents(on) {
      let options = browserify.defaultOptions;
      options.browserifyOptions.transform[1][1].plugins.push([
        'module-resolver',
        {
          alias: {
            '@tests': './tests',
            '@helpers': './tests/helpers'
          },
        },
      ]);
      on('file:preprocessor', browserify(options));
    },
    specPattern: 'tests/scenarios/**/*.test.js'
  },
});
