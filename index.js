const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');
var mysql = require('mysql')




// connection.query('SELECT `anime_title` FROM `anime` ', function (err, rows, fields) {
//   if (err) throw err
//   for(var anime of rows){
//     data.push(anime.anime_title)
//   }
//   // data = rows;
//   // console.log(data[1].anime_title);
//   console.log(data)
// })
// console.log(data)

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/anime', (req, res) => {
  var connection = mysql.createConnection({
    host:     'us-cdbr-iron-east-01.cleardb.net',
    user:     'beb3e092ffe131',
    password: '23e76532',
    database: 'heroku_20e37edc6a598e9',
  })
  connection.connect()
  var data=[];
  connection.query('SELECT * FROM `anime` ', function (err, rows, fields) {
    if (err) throw err
    for(var anime of rows){
      data.push([anime.anime_title, anime.anime_rating])
    }
    // data = rows;
    // console.log(data[1].anime_title);
    data_length = data.length
    number = Math.floor(Math.random() * data_length);
    console.log(data)
    Math.floor(Math.random() * 10);
    res.json(data[number])
    console.log("anime sent")
    // console.log(x)
  })
  const count = 5;

  // Generate some anime
  // const anime = Array.from(Array(count).keys()).map(i =>
  //   generatePassword(12, false)
  // )

  connection.end()
  // Return them as json
  // res.json(anime);

  // console.log(`Sent ${count} anime`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
