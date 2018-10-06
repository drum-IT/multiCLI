const locationAPI = require("../../../utils/location");

test("String with city and region when location type is location", async () => {
  const results = await locationAPI("location");
  expect(results).toEqual(expect.stringMatching(/\w,\s\w/g));
});

test("Object with timezone, city, and region keys when type is timezone", async () => {
  const results = await locationAPI("timezone");
  expect(results).toMatchObject({
    timezone: expect.any(String),
    city: expect.any(String),
    region: expect.any(String)
  });
});
