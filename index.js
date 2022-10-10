// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of the project?',
    'Provide a description of the project:',
    'How do you install this project?',
    'How do you use this project?',
    'How should people contribute to this project?',
    'How do you test this project?',
    'Choose a license for this project:',
    'Enter your GitHub username:',
    'Enter your Email:',
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) => 
    err ? console.log("error") : console.log("README.md created!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'install',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'use',
        },
        {
            type:  'input',
            message: questions[4],
            name: 'contribute',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'test',
        },
        {
            type: 'list',
            message: questions[6],
            choices: ['MIT', 'ISC', 'Apache', 'ODbl', 'None'],
            name: 'license',
            suffix: "press enter to select",
        },
        {
           type: 'input',
           message: questions[7],
           name: 'github', 
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email'
        }
        
    ])

    .then((data) => {
        // console.log(data.title)
        // console.log(data.description)
        // console.log(data.install)
        // console.log(data.use)
        // console.log(data.contribute)
        // console.log(data.test)
        // console.log(data.license)
        // console.log(data.github)
        // console.log(data.email)
        writeToFile(generateMarkdown(data));
    })
}

// Function call to initialize app
init();
