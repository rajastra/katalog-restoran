const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "e2e/**/*.spec.js",
  output: "e2e/outputs",
  helpers: {
    Puppeteer: {
      url: "http://127.0.0.1:9000",
      show: true,
      windowSize: "1200x900",
      chrome: {
        args: ["--no-sandbox", "--headless", "--window-size=1366,768", "--disable-web-security"],
        ignoreHTTPSErrors: true,
      },
    },
  },
  include: {
    I: "./steps_file.js",
  },
  name: "restaurant-apps",
};
