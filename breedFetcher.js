const request = require('request');

const breedDescriptionFetch = (breed, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
  
    let data = JSON.parse(body)[0];
  
    if (data) {
      callback(null, data.description.trim());
    } else {
      callback('no breed found. Goodbye!', null);
    }
  });
};

module.exports = {
  breedDescriptionFetch
};