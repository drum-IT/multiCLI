// get dependencies
const ora = require("ora");
const getLocation = require('../utils/location');
const getCountryInfo = require('../utils/country');

module.exports = async args => {
  try {
    const spinner = ora().start();
    const location = args.info || args.i || (await getLocation("country"));
    const country = await getCountryInfo(location);
    const {name, alpha3Code, capital, callingCodes, subregion, demonym, languages, currencies} = country;
    const countryData = {name, alpha3Code, capital, callingCodes, subregion, demonym, languages, currencies};

    spinner.stop();
    console.log(
      `Here is some basic info for ${name} (${alpha3Code}):
      * Capital: ${capital}
      * Location: ${subregion}
      * Language: ${languages[0].name}
      * Calling Code: +${callingCodes}
      * Currency: ${currencies[0].name} (${currencies[0].code},${currencies[0].symbol})
      * People: ${demonym}`
    );    
    return countryData;
  } catch(err) {
    spinner.stop();
    console.error(err);
  }
};