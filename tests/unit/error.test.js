const error = require("../../utils/error");

test("Error message should be returned", () => {
  expect(error("error message", false)).toBe("error message");
});
