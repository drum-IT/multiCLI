const axios = require("axios");

module.exports = async () => {
  const results = await axios({
    method: "get",
    url: "http://ip-api.com/json"
  });

  const { city, region } = results.data;
  return `${city}, ${region}`;
};
