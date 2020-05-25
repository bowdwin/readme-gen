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
const inquirer = require('inquirer');
// Project title
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Project title?',
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Description of project?',
    },
    //TOC
    {

    },
    //Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions',
    },
    //license
    {
        type: 'input',
        name: 'license',
        message: 'license:',
    },
    // Contributing
    {
        type: 'input',
        name: 'contributing',
        message: 'list who constributed to project:',
    },
    // Tests
    {
        type: 'input',
        name: 'tests',
        message: 'list test:',
    },
    // Quest
    {
        type: 'input',
        name: 'questions',
        message: 'list questions:',
    },
])

