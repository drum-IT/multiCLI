// get dependencies
const ora = require("ora");
const getWeather = require("../utils/weather");
const getLocation = require("../utils/location");

// get the current weather conditions for a location.
module.exports = async args => {
  const spinner = ora().start();
  try {
    const location = args.location || args.l || (await getLocation("location"));
    const weather = await getWeather(location);
    spinner.stop();
    const conditions = {
      temp: weather.condition.temp,
      text: weather.condition.text
    };
    console.log(`Current conditions in ${location}:`);
    console.log(`\t${weather.condition.temp}° ${weather.condition.text}`);
    return conditions;
  } catch (err) {
    spinner.stop();
    console.error(err);
  }
};
