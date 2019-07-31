const request = require('request');

const breedToSearch = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedToSearch}`;

request(url, (error, response, body) => {
  if (error) {
    console.log(`error: ${error}`);
    return;
  }

  let data = JSON.parse(body)[0];

  if (data) {
    console.log(`${data.name}: ${data.description}`);
  } else {
    console.log("can not find a breed with that name. Goodbye!");
    return;
  }
});