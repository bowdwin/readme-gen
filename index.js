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
const fs = require('fs');
// Project title
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Project title?',
    },
    // about
    {
        type: 'input',
        name: 'about',
        message: 'Description of project?',
    },
    //Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Any Installation instructions?',
    },
    //license
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license',
        choices: [
            'lic1',
            'lic2',
            'lic3',
            "skip"
        ]
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
        message: 'any test performed for this?',
    },
    // Quest
    {
        type: 'input',
        name: 'questions',
        message: 'list questions:',
    },
]).then((answers) => {
    answers.tableOfContents;
    console.log(answers);
    //call write to readme function and create readme.d
    fs.writeFile("README.md", createReadmeFile(answers), function (err) {
        if (err) {
            throw err;
        }
        // console.log(`Saved ${repoNames.length} repos`);
    });
});

//write to file
let createReadmeFile = (answers) => {
    return (`
 # Project title: ${answers.title}

 ## About/Desciprtion: 
    ${answers.about}

## installation instructions:
    ${answers.installation}

    ## About/Desciprtion: 
    ${answers.installation}

 `)
};



