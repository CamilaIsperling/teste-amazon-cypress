const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ezc77f',
  e2e: {
    baseUrl: "https://www.amazon.com.br",
  },
});
