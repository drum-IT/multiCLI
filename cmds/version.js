// get dependencies
const { version } = require("../package.json");
const pretty = require('../utils/pretty-print/pretty-print');

// log app version
module.exports = args => {
  pretty.log(`v${version}`);
};
