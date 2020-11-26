
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