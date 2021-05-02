const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

    

inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your GitHub Username?',
    },
    {
      type: 'input',
      name: 'person',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'project',
      message: 'What is your Project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a description of your project.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of License should your project have?',
      choices: [
        'MIT', 
        'Apache-License-2.0', 
        'Mozilla-Public-License-2.0',
        'Boost Software License 1.0',
      ]
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'What command should be run to install dependencies?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What command should be used to run test ?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using the repo?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What does the user need to know about contributing to the repo?',
    },
  ])
  
  .then((data) => {
    const generateReadme = markdown(data);
 
    
    fs.writeFile('README.md', generateReadme, (err) =>
      err ? console.log(err) : console.log('Generated Your Read Me!')
    );
  });



