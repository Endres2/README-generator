

// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [
    {   
        message:"What is your Github username?",
        type: "input",
        name: "username"
    },
    {   
        message:"What is your email?",
        type: "input",
        name: "email"
    },
    {   
        message:"What is your project name?",
        type: "input",
        name: "projectName"
    },
    {   
        message:"Write a short description of your project:",
        type: "input",
        name: "projectDescription"
    },
    {   
        message:"What type of license do you have for your project?",
        type: "list",
        name: "license",
        choices:["MIT","APACHE 2.0","GPL 3.0","BSD 3","None"],
    },
    {   
        message:"What command should be run to install dependencies?",
        type: "input",
        name: "command",
        default: "npm i"
    },
    {   
        message:"What command should be run to test?",
        type: "input",
        name: "test",
        default:"npm test"
    },
    {   
        message:"What does the user need to know about using the repo?",
        type: "input",
        name: "usage"
    },
    {   
        message:"What does the user need to know about contributing to the repo?",
        type: "input",
        name: "contribution"
    },
    
];

// TODO: Create a function to write README file
writeToFile = (fileName, data) =>  {
    fs.writeFileSync( path.join(process.cwd())+fileName, data, (err)=>{
        err ? console.log(err) : console.log("README DONE!")
    })
}

// TODO: Create a function to initialize app
init = () => {
    inquirer.
        prompt(questions)
        .then((ans) =>{
            console.log(ans)
            writeToFile("/README.md",generateMarkdown(ans));
        })
        .catch((error) => {
            error ? console.log(error) : console.log("Done")
        });

        
};

// Function call to initialize app
init();
