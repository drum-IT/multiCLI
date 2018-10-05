const pretty = require('../utils/pretty-print/pretty-print');

// say hello to the user, or not
module.exports = args => {
  if (args.name || args.n) {
    const response = `Hello ${args.name || args.n}!`;
    pretty.logBright(response)
    return response;
  }
  const response = "I don't talk to strangers...";
  pretty.warn(response)
  return response;
};
