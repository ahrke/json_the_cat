const { breedDescriptionFetch } = require('./breedFetcher');

const breedToFetch = process.argv.slice(2);

breedDescriptionFetch(breedToFetch, (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
});