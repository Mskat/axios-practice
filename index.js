const modAxios = require('axios');

const strURL = 'https://jsonplaceholder.typicode.com/users/';

module.exports.getUserEmail = async function getUserEmail(strUserId, strURL) {
    let strEmail;
    try {
        const response = await modAxios({
            method: 'GET',
            url: strUserId,
            baseURL: strURL,
            params: {
                query: strUserId
                }
        });
        strEmail = response.data.email;
    } catch (err) {
        console.log(err);
    }
    return strEmail;
};

function getHostname(strEmail) {
    if (!strEmail) {
        throw 'Invalid email!';
    }
    strHostname = strEmail.substring(strEmail.lastIndexOf("@") + 1);
    return strHostname;
}

async function main() {
    const strEmail = await getUserEmail('4', strURL);
    let strHostname;
    try {
        strHostname = getHostname(strEmail);
        console.log(strHostname);
    } catch (err) {
        console.log(err);
    }
}

main();
