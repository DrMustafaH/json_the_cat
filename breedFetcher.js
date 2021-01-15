const request = require('request')

const fetchBreedDescription = function (breedName, callback) {
  const shortBreedName = breedName.substring(0, 4);
  request(`https://api.thecatapi.com/v1/images/search?breed_id=${shortBreedName}`, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      const bodyObj = JSON.parse(body);
      if (bodyObj.length === 0) {
        callback(error, bodyObj.length);
      } else {
        const description = bodyObj[0].breeds[0].description;
        callback(error, description);
      }
    }
  });
};


module.exports = {
  fetchBreedDescription
}