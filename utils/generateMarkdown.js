// function returns a license badge
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return 'https://img.shields.io/badge/License-MIT-blue.svg';
    case 'Apache 2.0':
      return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
    case 'BSD 2 Clause':
      return 'https://img.shields.io/badge/License-BSD%202--Clause-blue.svg';
    case 'Simple 2.0':
      return 'https://img.shields.io/badge/License-simple-blue.svg';
    case 'Unlicense':
      return 'https://img.shields.io/badge/License-unlicense-blue.svg';
    }
}

// function that returns the license link
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'BSD 2 Clause':
      return 'https://opensource.org/licenses/BSD-2-Clause';
    case 'Simple 2.0':
      return 'https://opensource.org/licenses/Simple-2.0';
    case 'Unlicense':
      return 'https://opensource.org/licenses/unlicense';
    }
}

// function that returns the license section of README
function renderLicenseSection(license) {
    return `This project is released under ${license} opensource license`;
}

// function to generate markdown for README
function generateMarkdown(data) {
  const licenseLink = renderLicenseLink(data.license);
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

return `# ${data.title}

## Description
![License](${licenseBadge})
\n
${data.description}

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${licenseSection}:
\n
${licenseLink}

## Questions
For more about my work, check out my Github profile: https://github.com/${data.github}

If you have any questions and would like to chat, please feel free to send me an email directly to ${data.email}
`;
}

module.exports = generateMarkdown;
