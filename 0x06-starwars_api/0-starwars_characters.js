#!/usr/bin/node
const request = require('request');
const BaseUrl = 'https://swapi-api.alx-tools.com/api/';

if (process.argv.length === 3) {
  getMovieCharachter(parseInt(process.argv[2]));
} else {
  console.error('Incorrect arguments passed!');
}

function getMovieCharachter (id) {
  request(`${BaseUrl}films`, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const res = JSON.parse(body);
      const movie = res.results;
      movie.forEach((item) => {
        if (item.episode_id === id) {
          item.characters.forEach((character) => {
            request(character, function (error, response, body) {
              let name = JSON.parse(body);
              name = name.name;
              !error && console.log(name);
              error && console.log(error);
            });
          });
        }
      });
    } else {
      console.log(error);
    }
  });
}
