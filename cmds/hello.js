// say hello to the user, or not
module.exports = args => {
  if (args.name || args.n) {
    const response = `Hello ${args.name || args.n}!`;
    console.log(response);
    return response;
  }
  const response = "I don't talk to strangers...";
  console.log(response);
  return response;
};
