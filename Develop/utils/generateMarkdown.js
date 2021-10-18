// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "") return "";
  
  switch (license) {
    case 'ISC':
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`;
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    case 'Apache-2.0':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
  
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "") return "";

  switch (license) {
    case 'ISC':
      return `(https://opensource.org/licenses/ISC)`;
    case 'MIT':
      return `(https://opensource.org/licenses/MIT)`;
    case 'Apache-2.0':
      return `(https://opensource.org/licenses/Apache-2.0)`;
  
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "") return "";

  return `
  ## Badges
  ${renderLicenseBadge(license)}${renderLicenseLink(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Content
  * [description](#description)
  * [installation](#installation)
  * [usage](#usage)
  * [license](#license)
  * [contribution](#contribution)
  * [test](#test)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  ## Usage

  ## License
  ${renderLicenseSection(data.license)}

  ## Contribution

  ## Test


`;
}

export default generateMarkdown
