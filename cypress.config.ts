const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://todos.dev.deltagreen.cz/',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
