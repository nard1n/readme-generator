// packages needed for application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// creating promise function (using promisify from util module)
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter description of project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contribution guidelines',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Any tests a developer should complete?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your application',
            choices: [
                "MIT",
                "Apache-2.0",
                "BSD-2-Clause",
                "Simple-2.0",
                "Unlicense"
            ],
        },
        {
            type: 'list',
            name: 'badge',
            message: 'Select the badge for selected license',
            choices: [
                "MIT",
                "Apache 2.0",
                "BSD-2-Clause",
                "Simple",
                "Unlicense"
            ],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        }
    ]);
};

// content of README file
const generateReadMe = (answers) =>
`# ${answers.title}

## Description
![License](https://img.shields.io/badge/License-${answers.badge}-yellow.svg)
${answers.description}

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is released under [${answers.license}](https://opensource.org/licenses/${answers.license}) opensource licensing

## Questions
For more about my work, check out my Github profile: https://github.com/${answers.github}

If you have any questions and would like to chat, please feel free to send me 
an email directly to ${answers.email}`;

// function to initialize app and write README file after prompts are answered
////function writeToFile(fileName, data) {}
const init = async () => {
    //console.log('hi'); //test init
    try {
        const answers = await questions();

        const readme = generateReadMe(answers);

        await writeFileAsync('README.md', readme);

        console.log('Successfully wrote README.md');
    } catch (err) {
        console.log(err);
    }
};

// Function call to initialize app
init();
