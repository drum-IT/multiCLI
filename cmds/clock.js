// get dependencies
const ora = require("ora");
const moment = require("moment-timezone");
const getLocation = require("../utils/location");

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
    console.log(
      `Current time in ${locationData.city}, ${locationData.region}: ${time}`
    );
  } catch (err) {
    spinner.stop();
    console.error(err);
  }
};
