const {
  askImageShape,
  askImageDimensions,
  askImageOptions,
  buildURL
} = require("../utils/image");

const pretty = require("../utils/pretty-print/pretty-print");

// Get placeholder image link module
module.exports = async () => {
  const { shape } = await askImageShape();
  const dimensions = await askImageDimensions(shape);
  const {
    options: { blur, random, grey }
  } = await askImageOptions();
  const image = {
    dimensions,
    grey,
    random,
    blur
  };
  const url = buildURL(image);
  return pretty.success(url);
};
