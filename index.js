// packages needed for application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');

// creating promise function (using promisify from util module)
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user input
const questions = [
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
                "Apache 2.0",
                "BSD 2 Clause",
                "Simple 2.0",
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
    ];

// function to prompt questions
function promptQuestions(questions) {
    return inquirer.prompt(questions);
}

// function to write README file after prompts are answered
function writeToFile(fileName, data) {
    writeFileAsync(fileName, data)
}

//function to initialize app
const init = async () => {
        try {
        const answers = await promptQuestions(questions);

        const markdown = await generateMarkdown(answers);

        writeToFile('README.md', markdown);

        console.log('Successfully wrote README.md');
    } catch (err) {
        console.log(err);
    }
};

// Function call to initialize app
init();
