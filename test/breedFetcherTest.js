const { breedDescriptionFetch } = require('../breedFetcher');
const { assert, expect } = require('chai');

describe("fetchBreedDescription", () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    breedDescriptionFetch('Siberian', (err, desc) => {
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc);

      done();
    });
  });

  it("should return an error if we pass a breed that can't be found", (done) => {
    breedDescriptionFetch("lalala", (err, desc) => {
      expect(err).to.not.equal(null);
      assert.equal(desc, null);

      done();
    });
  });
});