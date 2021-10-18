// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from './utils/generateMarkdown.js';
import {inquiererQuestions} from "./utils/InquirerConfig.js";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = inquiererQuestions;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readMeData = generateMarkdown(data);
    fs.writeFileSync(fileName, readMeData);
}

// TODO: Create a function to initialize app
async function init() {

    await inquirer.prompt(questions)
    .then((data) => {
        writeToFile("ReadMe.md", data);
    })
    .catch((error) => {
        console.log(error);
    });

}

// Function call to initialize app
await init();
