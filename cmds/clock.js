// get dependencies
const ora = require("ora");
const moment = require("moment-timezone");
const getLocation = require("../utils/location");
const pretty = require("../utils/pretty-print/pretty-print");
const error = require("../utils/error");

// get the current weather conditions for a location.
module.exports = async args => {
  const spinner = ora().start();
  try {
    const locationData =
      args.timezone || args.t || (await getLocation("timezone"));
    const time = moment()
      .tz(locationData.timezone)
      .format("MMMM Do YYYY, h:mm:ss a");
    spinner.stop();
    pretty.success(
      `Current time in ${locationData.city}, ${locationData.region}: ${time}`
    );
  } catch (err) {
    spinner.stop();
    return error(err);
  }
};
