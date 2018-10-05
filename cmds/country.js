const getLocation = require('../utils/location');

module.exports = async args => {
  try {
    const country = args.phonecode || args.p || await getLocation().country;
    console.log(country);
  } catch(err) {
    console.error(err);
  }
};