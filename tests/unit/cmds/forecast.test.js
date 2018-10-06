const forecast = require("../../../cmds/forecast");

test("Return array containing object for each day in forecast.", async () => {
  const results = await forecast({});
  expect(results).toEqual(
    expect.arrayContaining([
      {
        code: expect.any(String),
        date: expect.any(String),
        day: expect.any(String),
        high: expect.any(String),
        low: expect.any(String),
        text: expect.any(String)
      }
    ])
  );
});
