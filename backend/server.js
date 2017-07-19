var express = require('express');
var path = require('path');
var http = require('http');
var bodyParse = require('body-parser');

var pg = require('pg');
var conString = "postgres://postgres:123@localhost:5432/pickup";
var client = new pg.Client(conString);
client.connect();

var api = require('./api/api');

var app = express();

app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);

var port = process.env.PORT || 3000;

app.set('port',port);

var server = http.createServer(app);

app.listen(port, function(){
	console.log("Server started on port: "+port);
});