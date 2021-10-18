import licenseCheck from "./license.js";
import github from './github.js';

const validaNotEmpty = async (input) => {
    const isEmpty = (input === "")? true : false;
    const message = "Value cant be empty";

    return (isEmpty == false)? true : message;
}

const validateLicense = async (input) => {
    //accepts no license
    if(input === "") return true;

    const bisLicenseValid = licenseCheck.isLicenseValid(input);
    const message = licenseCheck.getErrorMessage(input);

    return (bisLicenseValid == true)? true : message;
}

const validateEmail = async (input) => {
    const message = "Please enter a valid GitHub email address";
    const valid = await github.isEmailvalid(input);

    return (valid == true)? true : message;
}

export default {
    validaNotEmpty,
    validateLicense,
    validateEmail
}