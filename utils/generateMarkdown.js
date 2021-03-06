// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = (license) => {
  //Used a switch case to check for string of license
  switch (license) {
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case "APACE 2.0":
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    case "GPL 3.03":
      return "https://img.shields.io/badge/License-GPLv3-blue.svg";
    case "BSD 3":
      return "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
    default:
      return "";
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLicenseLink = (license) => {
  //Used a switch case to check for string of license
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "APACE 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL 3.03":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //Assemble the final literal string to be added to the File
  return `[![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const x = renderLicenseSection(data.license);
  //console.log(x);
  return `
# ${data.projectName}

${x}

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


  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at https://github.com/${data.username}.
`;
}
//Import for index.js
module.exports = generateMarkdown;
