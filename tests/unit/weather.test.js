const weather = require("../../cmds/weather");

test("Return object containing temp and condition text.", async () => {
  const results = await weather({});
  expect(results).toMatchObject({
    temp: expect.any(String),
    text: expect.any(String)
  });
});
