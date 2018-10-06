// get dependencies
const axios = require("axios");

module.exports = async (country) => {
    const results = await axios({
        method: "get",
        url: `https://restcountries.eu/rest/v2/name/${country}`
    });
    return results.data[0];
}