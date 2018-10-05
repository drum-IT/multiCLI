// get dependencies
const ora = require("ora");
const moment = require("moment-timezone");
const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");
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

    clear();
    console.log();
    console.log(
      chalk.yellow(
        figlet.textSync("Clock", {
          font: "bulbhead",
          horizontalLayout: "full"
        })
      )
    );
    console.log();
    console.log(
      chalk.yellow(
        `Current time in ${locationData.city}, ${locationData.region}: ${time}`
      )
    );
    console.log();
  } catch (err) {
    spinner.stop();
    console.error(err);
  }
};
