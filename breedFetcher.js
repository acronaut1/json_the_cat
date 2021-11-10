const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(url, (err, res, body) => {
    console.log(`[Response]: ${res && res.statusCode}`);
    if (err === undefined) {
      callback(err, null);
      return;
    }
    
    if (body === "[]") {
      err = `\n😿:"Missing breed not found..."`;
      callback(err, null);
      return;
    }
    const data = JSON.parse(body);
    let catDesc = data[0].description;
    
    // let CATdesc = () => {
    //   console.log(`\n {[🐈-ID]: ${catDesc.id}  [Name]: ${catDesc.name} }:\n [Description]: ${catDesc.description}`);
    // };
    
    callback(null, catDesc);
  });
};
module.exports = { fetchBreedDescription };