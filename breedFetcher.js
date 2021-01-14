const myArgs = process.argv.slice(2);
const request = require('request')
let catBreedPassed = myArgs[0].substring(0, 4);

request(`https://api.thecatapi.com/v1/images/search?breed_id=${catBreedPassed}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return error;
  }
  const bodyObj = JSON.parse(body);
  if (bodyObj.length === 0) {
    console.log("Cat breed not found");
  } else {
    console.log(bodyObj[0].breeds[0].description);
  }
});
