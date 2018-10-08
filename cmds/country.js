// get dependencies
const ora = require("ora");
const getLocation = require('../utils/location');
const getCountryInfo = require('../utils/country');
const error = require('../utils/error.js');


module.exports = async args => {
  
  const spinner = ora().start();
  try {
    const location = args.info || args.i || (await getLocation("country"));
    const country = await getCountryInfo(location);
    const {name, alpha3Code, capital, callingCodes, subregion, demonym, languages, currencies} = country;

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
    return country;
  } catch(err) {
    spinner.stop();
    return error(err.response.data.message);
    //error(err.data.message);
  }
};