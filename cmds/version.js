// get dependencies
const { version } = require("../package.json");

// log app version
module.exports = args => {
  console.log(`v${version}`);
};
