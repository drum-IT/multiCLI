const { buildURL } = require("../../../utils/image");

describe("Test image URL based parameters provided", () => {
  test("Returns a string", () => {
    const result = buildURL({});
    expect(typeof result).toBe("string");
  });
  test("Default 200 x 200 square.", () => {
    const image = {
      dimensions: [200, 200]
    };
    const result = buildURL(image);
    expect(result).toMatch("https://picsum.photos/200");
  });
  test("1000 x 500 grey rectangle.", () => {
    const image = {
      dimensions: [1000, 500],
      grey: true
    };
    const result = buildURL(image);
    expect(result).toMatch("https://picsum.photos/g/1000/500");
  });
  test("300 x 200, grey, random, blur  .", () => {
    const image = {
      dimensions: [300, 200],
      grey: true,
      random: true,
      blur: true
    };
    const result = buildURL(image);
    expect(result).toMatch(
      "https://picsum.photos/g/300/200/?random=true&blur=true"
    );
  });
});
