const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([{
            type: 'input',
            name: 'title',
            message: 'Project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Why does this web app exist? What is the purpose?',
        },
        {
            type: 'input',
            name: 'liveLink',
            message: 'Deployed site link?',
        },
        {
            type: 'input',
            name: 'gitHubLink',
            message: 'GitHub Link?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the specific steps installation steps to remove ambiguity and get people to using your project as quickly as possible?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide an example of usage to demonstrate usage, add links to more sophisticated examples.',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who participated on this project? What is their GitHub username?',
        }
    ])
    .then((data) => {
        const filename = "README.md";

        const template = `# ${data.title} 

Badges (https://shields.io/)
        
## Description
${data.description} 
${data.liveLink} 
${data.gitHubLink} 

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
        
## Installation
${data.installation}

## Usage
${data.usage}
        
## Contributing
${data.usage}

## License
[MIT](#https://choosealicense.com/licenses/mit/)`

        fs.writeFile(filename, (template), (err) =>
            err ? console.log(err) : console.log('Success!')
        )

    });