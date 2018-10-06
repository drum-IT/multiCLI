const hello = require("../../../cmds/hello");

test("Prints 'Hello <name>!' if name argument is provided", () => {
  expect(hello({ name: "Test" })).toBe("Hello Test!");
  expect(hello({ n: "Test" })).toBe("Hello Test!");
});

test("Prints 'I don't talk to strangers...' if no name argument is provided", () => {
  expect(hello({})).toBe("I don't talk to strangers...");
});
