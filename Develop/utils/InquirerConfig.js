import licenseCheck from "./license.js";

const userName = {
    type: "input",
    name: "name",
    message: "Whats your name?",
    validate: async (input) => {
        if(input === "") {
            return 'please enter your name'
        } else{
            return true;
        }
    }
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
    validate: async (input) => {
        //accepts no license
        if(input === "") return true;

        const bisLicenseValid = licenseCheck.isLicenseValid(input);
        const message = licenseCheck.getErrors(input);

        return (bisLicenseValid == true)? true : message;
    }
}

export const inquiererQuestions = [
     userName,
    projectTitle,
    description,
    installation,
    license
];