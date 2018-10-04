const menus = {
  main: `
    multitool [command] <options>

    version ............ show package version
    help ............... show help menu for a command
    hello .............. the tool will say hello, but only if you tell it your --name
    weather ............ show today's weather for a location
    weather ............ show a weather forecast for a location
    
    `,
  weather: `
      multicli weather <options>

      --location, -l ..... the location you want to see today's weather for

    `,
  forecast: `
    multicli forecast <options>

    --location, -l ..... the location you want to see a weather forecast for

  `
};

module.exports = args => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0];

  console.log(menus[subCmd] || menus.main);
};
