module.exports = args => {
  if (args.name) {
    console.log(`Hello ${args.name}!`);
  } else {
    console.log("I don't talk to strangers...");
  }
};
