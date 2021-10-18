import valid from 'validate-npm-package-license';

const isLicenseValid = (input) => {

    const validation = valid(input);

    if( validation.validForNewPackages || 
        validation.validForOldPackages ||
        validation.spdx ){
           return true; 
    } else{
        return false;
    }
}

const getErrors = (input) => {
    const validation = valid(input);
    let message = "";

    if(validation.warnings){
        validation.warnings.forEach(item => {
            message += item;
        });
    }

    return message;
}

export default {
    isLicenseValid,
    getErrors
}









