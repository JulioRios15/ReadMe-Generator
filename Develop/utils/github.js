import githubUsername from "github-username";

const isEmailvalid = async (email) => {

    return await githubUsername(email)
    .then(() => {
        return true;
    })
    .catch(() => {
        return false;
    })
}

const getGithubUsername = async (email) => {
    return await githubUsername(email)
    .then((username) => username)
    .catch(() => null)
}

export default {
    isEmailvalid,
    getGithubUsername
}