// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description

${data.description}

## Installation

${data.installation}
mary had a little lamb
this was her license to own that lamb: ${data.licence}
`;
}

module.exports = generateMarkdown;
