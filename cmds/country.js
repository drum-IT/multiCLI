// get dependencies
const getLocation = require('../utils/location');
const getCountryInfo = require('../utils/country');

module.exports = async args => {
  try {
    const location = args.info || args.i || (await getLocation("country"));
    const country = await getCountryInfo(location);
    const {name, alpha3Code, capital, callingCodes, subregion, demonym, languages, currencies} = country;
    const countryData = {name, alpha3Code, capital, callingCodes, subregion, demonym, languages, currencies};

    console.log(
      `Here is some basic info for ${name} (${alpha3Code}):
      * Capital: ${capital}
      * Location: ${subregion}
      * Language: ${languages[0].name}
      * Calling Code: +${callingCodes}
      * Currency: ${currencies[0].name} (${currencies[0].code},${currencies[0].symbol})
      * People: ${demonym}`
    );    
    console.log(countryData);
    return countryData;
  } catch(err) {
    console.error(err);
  }
};