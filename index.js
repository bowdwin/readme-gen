const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
// Project title
inquirer
  .prompt([
    //Prompt for username on github
    {
      type: "input",
      name: "username",
      message: "Enter your Github Username?",
    },
    //Project title
    {
      type: "input",
      name: "title",
      message: "Project title?",
    },
    // description
    {
      type: "input",
      name: "description",
      message: "Description of project?",
    },
    //Installation
    {
      type: "input",
      name: "installation",
      message: "Any Installation instructions?",
    },
    //how to use project
    {
      type: "input",
      name: "usage",
      message: "What is the expected use of this repo?",
    },
    //license
    {
      type: "list",
      name: "license",
      message: "Please select a license",
      choices: ["MIT", "Apache", "GPL"],
    },
    // Contributing
    {
      type: "input",
      name: "contributing",
      message: "Who are the contributing authors?",
    },
    // Tests
    {
      type: "input",
      name: "tests",
      message: "any test performed for this in the test Env? What were they?",
    },
    // Quest
    {
      type: "input",
      name: "questions",
      message: "Who does one contact for questions about the repo, and how?",
    },
  ])
  //Grab answers from above questions
  .then((answers) => {
    //make an api call to github for username
    const queryUrl = `https://api.github.com/users/${answers.username}`;
    axios
      .get(queryUrl)

      .then((github) => {
        fs.writeFile("README.md", createReadMe(answers, github), (err) => {
          if (err) {
            return console.log(err);
          }

          console.log("Success!");
        });
      });
  });

// Write file contents
let createReadMe = (answers, github) => {
  return `[![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg)](https://github.com/Naereen/badges)
# Project title: ${answers.title}

## Description
    ${answers.description}

## Table of contents:

* [Description](#Description)
* [Installation](#Installation-Instructions)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation Instructions:
    ${answers.installation}

## Expected use of repo:
    ${answers.usage}

## License:
    ${answers.license}

## Contributing:
    ${answers.contributing}

## Tests:
    ${answers.tests}

## Questions:
    ${answers.questions}

## Portfolio Image
![Image GitHub user](${github.data.avatar_url})
## Portfolio Username
${github.data.blog}
  `;
};
