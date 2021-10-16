const userName = {
    type: "input",
    name: "name",
    message: "Whats your name?"
};

const projectTitle = {
    type: "input",
    name: "title",
    message: "Project Name?"
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
}

export const inquiererQuestions = [
    userName,
    projectTitle,
    description,
    installation,
    license
];