const express = require('express');
const path = require('path');
var mysql = require('mysql')


const app = express();

// database configuration
var db_config = {
  connectionLimit : 10,
  host:     'us-cdbr-iron-east-01.cleardb.net',
  user:     'beb3e092ffe131',
  password: '23e76532',
  database: 'heroku_20e37edc6a598e9',
  port:     '3306',
};

// pool manages database connection and release
var pool = mysql.createPool( db_config )

var data=[]; //will hold anime to random
pool.query('SELECT * FROM `anime` ', function (err, rows, fields) {
  if (err) throw err;

  for(var anime of rows){
    data.push([anime.anime_title, anime.anime_rating])
  }
  console.log(data)
});

  // console.log(x)

// connection.end()
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/anime', (req, res) => {
  data_length = data.length
  console.log(data)
  number = Math.floor(Math.random() * data_length);
  res.json(data[number]);
  console.log("anime sent, number");
});
 // The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
 const port = process.env.PORT || 5000;
app.listen(port);
 console.log(`anime generator listening on ${port}`);
