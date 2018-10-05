const country = require("../../cmds/country");

test("Return an object containing country data.", async () => {
  const results = await country({});
  expect(results).toMatchObject({
    name: expect.any(String),
    capital: expect.any(String),
    subregion: expect.any(String),
    callingCodes: expect.any(Array),
    demonym: expect.any(String),
    languages: expect.any(Array),
    currencies: expect.any(Array),
  }); 
});
