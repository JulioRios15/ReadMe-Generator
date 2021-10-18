// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from './utils/generateMarkdown.js';
import {inquiererQuestions} from "./utils/InquirerConfig.js";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = inquiererQuestions;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const formattedFileName = `${fileName}-ReadMe.md`;
    const readMeData = generateMarkdown(data);

    fs.writeFileSync(`${formattedFileName}`, readMeData);
}

// TODO: Create a function to initialize app
async function init() {

    await inquirer.prompt(questions)
    .then((data) => {
        writeToFile(data.name, data);
    })
    .catch((error) => {
        console.log(error);
    });

}

// Function call to initialize app
await init();
