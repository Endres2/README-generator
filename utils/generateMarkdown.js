// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectName}

# License

## Description

${data.projectDescription}

# Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)

<!-- toc -->

# Installation


  \`\`\`
  ${data.command}
  \`\`\`


# Usage


  ${data.usage}



# License

  This project is licensed under ${data.license} license

# Contributing

  ${data.contribution}

# Test

To run test, run the following command:

  \`\`\`
  ${data.test}
  \`\`\`
 

# Questions


  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.username}.
`;
}

module.exports = generateMarkdown;
