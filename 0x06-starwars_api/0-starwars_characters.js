#!/usr/bin/node
const request = require('request');
// console.log(process.argv);
const BaseUrl = 'https://swapi-api.alx-tools.com/api/';

if (process.argv.length === 3) {
  getMovieCharachter(2);
} else {
  console.error('Incorrect arguments passed!');
}

async function getMovieCharachter (id) {
  request(
    `${BaseUrl}films/${id}`, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        const res = JSON.parse(body);
        const charachters = res.characters;
        for (const i of charachters) {
          request(i, function (error, response, body) {
            !error && console.log(JSON.parse(body).name);
            error && console.log(error);
          });
        }
      } else {
        console.log(error);
      }
    }
  );
}
