// get dependencies
const axios = require("axios");

// get user location based on IP address
module.exports = async () => {
  const results = await axios({
    method: "get",
    url: "http://ip-api.com/json"
  });
  const { city, region, country } = results.data;
  return `${city}, ${region}, ${country}`;
};
