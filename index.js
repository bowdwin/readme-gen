// Create a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command:
// node index.js
// The user will be prompted for their GitHub username and other information pertaining to the project the README is for.
// The README will be populated with the following:

// At least one badge
// Project title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions

// User GitHub profile picture
// User GitHub email
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
// Project title
inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "Enter your Github Username",
    },
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
    //license
    {
      type: "list",
      name: "license",
      message: "Please select a license",
      choices: ["lic1", "lic2", "lic3", "skip"],
    },
    // Contributing
    {
      type: "input",
      name: "contributing",
      message: "list who constributed to project:",
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
      message: "list questions:",
    },
  ])
  .then((answers) => {
    console.log(answers);
    console.log(answers.username);
    const queryUrl = `https://api.github.com/users/${answers.username}`;
    axios.get(queryUrl).then((response) => {
      console.log(response.data);

      console.log(response.data.avatar_url);
      const avatar = response.data.avatar_url;
      // callQuestions(response.data.avatar_url);
    });

    console.log(queryUrl);
    //call write to readme function and create readme
    fs.writeFile("README.md", createReadmeFile(answers, avatar), function (
      err
    ) {
      if (err) {
        throw err;
      }
      // console.log(`Saved ${repoNames.length} repos`);
    });
  });

//write to file
let createReadmeFile = (answers, response) => {
  return `
# Project title: ${answers.title}

## Table of contents:

* [Description](#Description)
* [Installation](#Installation-Instructions)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Description 
    ${answers.description}

## Installation Instructions:
    ${answers.installation}

## License: 
    ${answers.license}

## Contributing: 
    ${answers.contributing}

## Tests: 
    ${answers.tests}

## Questions:
    ${answers.questions}

    ${avatar}

 `;
};
