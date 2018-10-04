const menus = {
  main: `
    multitool [command] <options>

    version ............ show package version
    help ............... show help menu for a command
    hello .............. the tool will say hello, but only if you tell it your --name
    
    `
};

module.exports = args => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0];

  console.log(menus[subCmd] || menus.main);
};
