// function to generate markdown for README
function generateMarkdown(data) {
  return `
# 
  
${data.projectTitle}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [contributing](#credits)
* [License](#license)
* [Test](#test)
* [Issues](#issues)
* [Questions](#questions)


## Installation
${data.installation}

## Usage 
${data.usage}

![](/Assets/readme.gif)

## Contribution
${data.contribution}

## License
${data.licence}

## Test
${data.test}

## Issues
Feel free to submit issues and enhancement requests.

## Questions?
For any questions you may have, feel free to find me via the information provided below:

Email:
${data.email}

[Github Page](https://github.com/${data.username}/)
${data.username}
`;
}

module.exports = generateMarkdown;
