const pretty = require("../utils/pretty-print/pretty-print");

// the text sent by the help command
const menus = {
  main: `
    multicli [command] <options>

    version ............ show package version
    help ............... show help menu for a command
    hello .............. the tool will say hello
    weather ............ show today's weather for a location
    forecast ........... show a weather forecast for a location
    clock .............. get date and time for current location based on IP address
    country............. get helpful country information for a location
    quote .............. display a random quote
    image .............. get a random url image of specified dimenions from picsum API
    
    `,
  weather: `
      multicli weather <options>

      --location, -l ..... the location you want to see today's weather for

      If no options are provided, weather for the user's IP address will be shown.

    `,
  forecast: `
    multicli forecast <options>

    --location, -l ..... the location you want to see a weather forecast for

    If no options are provided, a forecast for the user's IP address will be shown.

  `,
  hello: `
    multicli hello <options>

    --name, -n ..... your name

    If no options are provided, the tool will be as friendly

  `,
  country: `
    multicli country <options>
    
    --info, -i ..... the country you would like information on.
    
    if no options are provided, country information based on the user's IP address will be shown.
  `
};

// determine which help text to log, and log it
module.exports = args => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0];
  pretty.log(menus[subCmd] || menus.main);
};
