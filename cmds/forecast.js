const ora = require("ora");
const getWeather = require("../utils/weather");
const getLocation = require("../utils/location");
const error = require("../utils/error");
const pretty = require('../utils/pretty-print/pretty-print');

module.exports = async args => {
  const spinner = ora().start();
  try {
    const location = args.location || args.l || (await getLocation("location"));
    const weather = await getWeather(location);
    spinner.stop();
    pretty.successBright(`Forecast for ${location}:`);
    weather.forecast.forEach(item =>
      pretty.success(
        `\t${item.date} - Low: ${item.low}° | High: ${item.high}° | ${
          item.text
        }`
      )
    );
    return weather.forecast;
  } catch (err) {
    spinner.stop();
    return error(err, true);
  }
}; 
