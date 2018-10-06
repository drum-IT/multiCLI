const weatherAPI = require("../../../utils/weather");

test("Return object containing title, condition object, and forecast array.", async () => {
  const results = await weatherAPI("Boston, MA");
  expect(results).toMatchObject({
    title: expect.any(String),
    condition: expect.objectContaining({
      code: expect.any(String),
      date: expect.any(String),
      temp: expect.any(String),
      text: expect.any(String)
    }),
    forecast: expect.arrayContaining([
      {
        code: expect.any(String),
        date: expect.any(String),
        day: expect.any(String),
        high: expect.any(String),
        low: expect.any(String),
        text: expect.any(String)
      }
    ])
  });
});
