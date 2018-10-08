const countryAPI = require("../../../utils/country");

test("Return an object containing country data from an API", async () => {
    const countryData = await countryAPI('honduras');
    expect(countryData).toMatchObject({
      name: expect.any(String),
      capital: expect.any(String),
      subregion: expect.any(String),
      callingCodes: expect.any(Array),
      demonym: expect.any(String),
      languages: expect.any(Array),
      currencies: expect.any(Array),
    }); 
  });
