const inquirer = require('inquirer');
const fs = require('fs');
           
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: "title",
    },
    {
        type: 'input',
        message: 'What is the purpose of the app?',
        name: "purpose",
    },
    {
        type: 'input',
        message: 'How can users install the project?',
        name: "installation",
    },
    {
        type: 'input',
        message: 'How can users use your project?',
        name: "usage",
    },
    {
        type: 'input',
        message: 'How can users test your project?',
        name: "test",
    },
    {
        type: 'input',
        message: 'How can users contribute to your project?',
        name: "contributions",
    },
    {
        type: "list",
        name: "licensing",
        message: "What license did you need",
        choices: ["Apache License", "Boost Software License", "BSD License", "GNU License", "MIT License"],
    },
    {
        type: "input",
        name: "github",
        message: "What is your github account?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },


    ]).then((response) =>{
    let myLicense;
    switch(response.licensing){
        case "Apache License":
            myLicense = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case "Boost Software License":
            myLicense = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
            break;
        case "BSD License":
            myLicense = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            break;
        case "GNU License":
            myLicense = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
        case "MIT License":
            myLicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
    }
    var readmeSkeleton = `# ${response.title}\n## Description\n${response.purpose}\n## Table of Contents:\n* [Installation](#installation)\n* [Usage](#usage)\n* [Licensing](#licensing)\n* [Contributing](#contributing)\n* [Tests](#tests)\n\n## Installation:\n${response.installation}\n\n## Usage:\n${response.usage}\n\n## Licensing:\n${myLicense}\n\n## Contributing:\n${response.contributions}\n\n## Tests:\n${response.test}\n\n### If you have any questions about the repo, open an issue or contact me directly at ${response.email}. You can find more of my work at [${response.github}((https://github.com/${response.github}/).`

    fs.appendFile('README.md', readmeSkeleton, (err) =>
    // TODO: Describe how this ternary operator works
    // If an err exists, display the error, else, show thhat the commit was logged
    err ? console.error(err) : console.log('Commit logged!')
    );
    })
