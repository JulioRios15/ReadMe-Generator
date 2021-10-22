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
    case 'BSD-2-Clause': 
      return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]`;
    case 'BSD-3-Clause': 
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`;
    case 'BSL-1.0':
      return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]`;
    case 'GPL-3.0':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
    case 'GPL-2.0':
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]`;
    case 'AGPL-3.0':
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]`;
    case 'LGPL-3.0':
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)]`;
    case 'IPL-1.0':
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]`
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
    case 'BSD-2-Clause': 
      return `(https://opensource.org/licenses/BSD-2-Clause)`
    case 'BSD-3-Clause': 
      return `(https://opensource.org/licenses/BSD-3-Clause)`
    case 'BSL-1.0':
      return `(https://www.boost.org/LICENSE_1_0.txt)`;
    case 'GPL-3.0':
      return `(https://www.gnu.org/licenses/gpl-3.0)`;
    case 'GPL-2.0':
      return `(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
    case 'AGPL-3.0':
      return `(https://www.gnu.org/licenses/agpl-3.0`;
    case 'LGPL-3.0':
      return `(https://www.gnu.org/licenses/lgpl-3.0)`;
    case 'IPL-1.0':
      return `(https://opensource.org/licenses/IPL-1.0)` 
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
  * [questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  ## Usage

  ## License
  ${renderLicenseSection(data.license)}

  ## Contribution
  contributions are always welcome!

  ## Test

  ## Questions
  [![Github: ${data.username}](https://img.shields.io/badge/GitHub-${data.username}-100000?style=for-the-badge&logo=github&logoColor=white)](http://github.com/${data.username})
`;
}

export default generateMarkdown
