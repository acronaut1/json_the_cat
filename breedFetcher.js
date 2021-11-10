const request = require('request');
let arg = process.argv[2];
let url = `https://api.thecatapi.com/v1/breeds/search?q=`;

const breedFile = function(callback) {
  request(`${url}${arg}`, (err, res, body) => {
    console.log(`[Response]: ${res && res.statusCode}`);
    if (err) {
      console.log(`error is ${err}`);
      return;
    }

    const data = JSON.parse(body);
    //console.log(`[typeof-data]:`, typeof data);
    const specimen = data[0];
    if (specimen) {
      callback(specimen);
    } else {
      console.log(`\n😿:"fail to find the breed ${data[0]}..."`);
      return;
    }
  });
};

const GETdescription = (data) => {
  console.log(`\n {[🐈-ID]: ${data.id}  [Name]: ${data.name} }:\n [Description]: ${data.description}`);
};

breedFile(GETdescription);