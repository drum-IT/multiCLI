// get dependencies
const axios = require("axios");
const error = require("../utils/error");

// get user location based on IP address
module.exports = async type => {
  const results = await axios({
    method: "get",
    url: "http://ip-api.com/json"
  });
  const { city, region, timezone, country } = results.data;
  switch (type) {
    case "location":
      return `${city}, ${region}`;
    case "timezone":
      return { timezone, city, region };
    case "country":
      return country;
    default:
      return error("No location type specified", true);
  }
};
