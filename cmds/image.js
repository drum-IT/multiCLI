const inquirer = require("inquirer");
const pretty = require('../utils/pretty-print/pretty-print');

const BASE_URL = "https://picsum.photos";

// helper functions
function createDimensionQuestion(dim) {
  return {
    type: "input",
    name: `${dim}`,
    message: `Enter the ${dim} of the image in pixels`,
    default: "200",
    validate: value => {
      if (value > 0) {
        return true;
      }
      return `Please enter the ${dim} of the image`;
    }
  };
}

// inquirer questions
function askImageShape() {
  const questions = [
    {
      type: "list",
      name: "shape",
      message: "Select the shape of the image",
      choices: ["Rectangle", "Square"],
      default: "Rectangle"
    }
  ];
  return inquirer.prompt(questions);
}

function askImageDimensions(shape) {
  if (shape === "Square") {
    return inquirer
      .prompt(createDimensionQuestion("size"))
      .then(({ size }) => `/${size}`);
  }

  const questions = [
    createDimensionQuestion("width"),
    createDimensionQuestion("height")
  ];
  return inquirer
    .prompt(questions)
    .then(({ width, height }) => `/${width}/${height}`);
}

function askImageOptions() {
  const questions = [
    {
      type: "checkbox",
      name: "options",
      message: "Please select additional options",
      choices: [
        { name: "Random", value: "random" },
        { name: "Greyscale", value: "grey" },
        { name: "Blur", value: "blur" }
      ],
      default: ["random", "blur"],
      filter: answers => {
        return {
          grey: answers.includes("grey") ? "/g" : "",
          blur: answers.includes("blur") ? "blur=true" : "",
          random: answers.includes("random") ? "random=true" : ""
        };
      }
    }
  ];

  return inquirer.prompt(questions);
}

// Get placeholder image link module
module.exports = async () => {
  const { shape } = await askImageShape();
  const dimensions = await askImageDimensions(shape);
  const {
    options: { blur, random, grey }
  } = await askImageOptions();
  pretty.success(
    `${BASE_URL}${grey}${dimensions}${(random || blur) &&
      "/?"}${random}${random && blur && "&"}${blur}`
  );
};
