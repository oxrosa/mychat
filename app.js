var express = require('express');
var router = express.Router()
var Sequelize = require('sequelize');
var app = express();
var models = require('./models');

console.log('App File');

var sequelize = new Sequelize('myfirsttestdb', 'rohit', 'password', {
  host: 'localhost',
  dialect: 'postgresql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  // SQLite only
 // storage: 'path/to/database.sqlite'
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

app.get('/',function(req,res){
    res.send(200);
});

app.get('/todos', function(req, res) {
     var raw_query1 = "select * from items";
        sequelize.query(raw_query1).then(function(results) {
            res.send(results);
        });
});
app.listen(8081);