import licenseCheck from "./license.js";

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

export default {
    validaNotEmpty,
    validateLicense,
}