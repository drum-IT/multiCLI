// get dependencies
const axios = require("axios");

// get weather from Yahoo weather api
module.exports = async location => {
  const results = await axios({
    method: "get",
    url: "https://query.yahooapis.com/v1/public/yql",
    params: {
      format: "json",
      q: `select item from weather.forecast where woeid in
        (select woeid from geo.places(1) where text="${location}")`
    }
  });
  const {
    title,
    condition,
    forecast
  } = results.data.query.results.channel.item;
  const weather = { title, condition, forecast };
  return weather;
};
