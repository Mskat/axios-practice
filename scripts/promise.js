const modAxios = require('axios');

function main() {
    const strURL = 'https://jsonplaceholder.typicode.com/users/';
    return modAxios({
        url: strURL,
    }).then(function(response) {
        let arrNames = [];
        let arrResults = response.data;
        for (let i = 0; i < arrResults.length; i++) {
            arrNames.push(arrResults[i].name);
        }
        console.log(arrNames);
    }).catch(function(err) {
        console.log(err)
    });
}

main();
