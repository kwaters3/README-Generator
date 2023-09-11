// Packages required to generate READme
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');



// Question Array (Input) for Users
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
          console.log('Please provide a project title.');
          return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of the project',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
          console.log('Please provide a description of the project.');
          return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide instructions on how to set up and install your project.',
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
          console.log('Please provide step-by-step installation instructions.');
          return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Explain how users can interact with your project.',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
          console.log('Please provide examples of how to use your project');
          return false;
      }
    }
  },
  {
    type: 'list', 
    name: 'license',
    message: 'Please select the appropriate license(s) for this project.',
    choices: [
      'MIT', 
      'Apache 2.0', 
      'BSD 3 Clause', 
      'No License'
    ]
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Explain how others can contribute to this project',
    validate: contributionInput => {
      if (contributionInput) {
        return true;
      } else {
          console.log('You can include guidelines for cloning/pull requests, and or issue reports.');
          return false;
      }
    }
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please describe how to run/test your project.',
    validate: testsInput => {
      if (testsInput) {
        return true;
      } else {
          console.log('Provide instruction on how to test the project.');
          return false;
      }
    }
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your GitHub username:',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
          console.log('Please enter your GitHub username..');
          return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email:',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
          console.log('Please enter your email..');
          return false;
      }
    }
  }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
