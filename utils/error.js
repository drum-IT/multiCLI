// log the error, and exit the process
module.exports = (message, exit) => {
  console.error(message);
  if (exit) {
    process.exit(1);
  }
};
