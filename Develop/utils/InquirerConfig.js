import validators from "./validators.js";

const projectTitle = {
    type: "input",
    name: "title",
    message: "Project Name?",
    validate: validators.validaNotEmpty
};

const description = {
    type: "input",
    name: "description",
    message: "Project description"
};

const installation = {
    type: "input",
    name: "installation",
    message: "installation description"
};

const license = {
    type: "input",
    name: 'license',
    message: "license",
    default: "ISC",
    validate: validators.validateLicense
}

export const inquiererQuestions = [
    projectTitle,
    description,
    installation,
    license
];