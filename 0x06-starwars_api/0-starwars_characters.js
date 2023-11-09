#!/usr/bin/node
const request = require('request');
const BaseUrl = 'https://swapi-api.alx-tools.com/api/';

if (process.argv.length === 3) {
  getMovieCharachter(process.argv[2]);
} else {
  console.error('Incorrect arguments passed!');
}

function getMovieCharachter (id) {
  request(
    `${BaseUrl}films/${id}`, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        const res = JSON.parse(body);
        const characters = res.characters;

        for (const i of characters) {
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
