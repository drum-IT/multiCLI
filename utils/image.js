const inquirer = require("inquirer");

// helper functions
const createDimensionQuestion = dim => ({
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
});

const buildURL = ({
  dimensions = [200, 200],
  grey = false,
  random = false,
  blur = false
}) => {
  const BASE_URL = "https://picsum.photos";
  const d = `/${dimensions[0]}/${dimensions[1]}`;
  const g = grey ? "/g" : "";
  const query =
    (random || blur) &&
    `/?${random && "random=true"}${random && blur && "&"}${blur &&
      "blur=true"}`;

  return `${BASE_URL}${g}${d}${query}`;
};

// inquirer questions
const askImageShape = () => {
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
};

const askImageDimensions = shape => {
  if (shape === "Square") {
    return inquirer
      .prompt(createDimensionQuestion("size"))
      .then(({ size }) => [size, size]);
  }

  const questions = [
    createDimensionQuestion("width"),
    createDimensionQuestion("height")
  ];
  return inquirer
    .prompt(questions)
    .then(({ width, height }) => [width, height]);
};

const askImageOptions = () => {
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
          grey: answers.includes("grey"),
          blur: answers.includes("blur"),
          random: answers.includes("random")
        };
      }
    }
  ];

  return inquirer.prompt(questions);
};

module.exports = {
  askImageShape,
  askImageDimensions,
  askImageOptions,
  buildURL
};
