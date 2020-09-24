const request = require('request');
const fs = require('fs');
let inputs = process.argv.slice(2);

const fetch = (inputs) => {
  request(inputs[0], (err, response, body) => {
    fs.writeFile(inputs[1], err + response + body, function (err) {
      if (err) throw err;
      let stats = fs.statSync(inputs[1]);
      console.log('Downloaded and saved '+ stats.size +' bytes to ' + inputs[1]);
    })
  });
};

fetch(inputs);