const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Timeout
  defaultCommandTimeout: 5000,
  execTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 5000,
  responseTimeout: 30000,

  // Directories
  downloadsFolder: "output/downloads",
  fileServerFolder: "",
  fixturesFolder: "cypress/fixtures",
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",

  // Screenshots
  screenshotOnRunFailure: true,
  screenshotsFolder: "output/screenshots",
  trashAssetsBeforeRuns: true,

  // Viewport
  viewportHeight: 660,
  viewportWidth: 1000,

  // Actions
  waitForAnimations: true,

  e2e: {
    baseUrl: 'https://local.sanitairwinkel.nl',
    slowTestThreshold: 10000,
    retries: {
      runMode: 1,
      openMode: 1
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
