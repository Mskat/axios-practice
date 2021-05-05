const modAxios = require('axios');

async function main() {
    const strURL = 'https://jsonplaceholder.typicode.com/users/';
    try {
        const objResult = await modAxios(
            strURL,
        );
        const arrEmails = [];
        const arrResults = objResult.data;
        for (let i = 0; i < arrResults.length; i++) {
            arrEmails.push(arrResults[i].email);
        }
        console.log(arrEmails);
    } catch (err) {
        console.log(err.message);
    }
}

main();
