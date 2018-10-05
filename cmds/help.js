// the text sent by the help command
const menus = {
  main: `
    multitool [command] <options>

    version ............ show package version
    help ............... show help menu for a command
    hello .............. the tool will say hello
    weather ............ show today's weather for a location
    forecast ........... show a weather forecast for a location
    clock .............. get date and time for current location based on IP address
    
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

  `
};

// determine which help text to log, and log it
module.exports = args => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0];
  console.log(menus[subCmd] || menus.main);
};
