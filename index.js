// get dependencies
const minimist = require("minimist");
const error = require("./utils/error");

// get commands
const help = require("./cmds/help");
const version = require("./cmds/version");
const hello = require("./cmds/hello");
const weather = require("./cmds/weather");
const forecast = require("./cmds/forecast");
const clock = require("./cmds/clock");

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  let cmd = args._[0] || "help";

  if (args.version || args.v) {
    cmd = "version";
  }

  if (args.help || args.h) {
    cmd = "help";
  }

  switch (cmd) {
    case "help":
      help(args);
      break;
    case "version":
      version(args);
      break;
    case "hello":
      hello(args);
      break;
    case "weather":
      weather(args);
      break;
    case "forecast":
      forecast(args);
      break;
    case "clock":
      clock(args);
      break;
    default:
      error(`"${cmd}" is not a valid command`, true);
      break;
  }
};
