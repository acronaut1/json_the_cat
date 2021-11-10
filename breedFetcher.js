const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(url, (err, res, body) => {
    console.log(`[Response]: ${res && res.statusCode}`);
    if (err === undefined) {
      callback(error, null);
      return;
    }
    
    if (body === "[]") {error = `\n😿:"Missing breed not found..."`;
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    let catDesc = data[0];
    
    let CATdesc = () => {
      console.log(`\n {[🐈-ID]: ${catDesc.id}  [Name]: ${catDesc.name} }:\n [Description]: ${catDesc.description}`);
    };
    
    callback(null, CATdesc());
  })
}
module.exports = { fetchBreedDescription };