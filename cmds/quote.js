const axios = require("axios");
const ora = require("ora");
const error = require("../utils/error");
const pretty = require("../utils/pretty-print/pretty-print");

// say hello to the user, or not
module.exports = async args => {
  const spinner = ora().start();
  try {
    const response = await axios({
      method: "get",
      url: "https://talaikis.com/api/quotes/random/"
    });
    spinner.stop();
    const { quote, author } = response.data;
    pretty.logBright(quote);
    pretty.logBright(`--${author}`);
  } catch (err) {
    spinner.stop();
    return error(err.data.error);
  }
};
