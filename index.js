// array of questions for user
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

    const questions = [
        {
            type: 'input',
            message: 'please enter the title of your project?',
            name: 'projectTitle',
        },
        {
            type: 'input',
            message: 'write a description about your project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'please enter installation instructions?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'what are the usage of this project?',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'choose licence for your application from the list?',
            name: 'licence',
            choices: [
                "MIT", "GNU", "Apache", "'Mozilla",
            ]
        },
        {
            type: 'input',
            message: 'Please provide guidelines on how other developers can contribute to your project?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Please enter any tests written for your app?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Please enter your email?',
            name: 'email',
        },
];
//Starting up inquirer prompts

inquirer.prompt(questions)
    .then(function(res){
        console.log(res)
        fs.writeFile('README.md',generateMarkdown(res), (err) =>
        err ? console.error(err) : console.log('Success!'))
    })
// function to write README file