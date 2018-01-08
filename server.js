var http = require('http');
var https = require('https');
var request = require('request-promise');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');	
var app = express();

var port = 8080;

app.use('/static', express.static(path.join(__dirname, 'static')));

app.use(bodyParser.urlencoded({ extended: true }));	
require('./app/routes/')(app, {});	
	
app.listen(8080, () => {
  console.log('We are live on ' + 8080);
});	
	
	
	
	
	
	
	
	
	
//var server = http.createServer(function(req, res) {
//	
//	res.writeHead(200);
//	res.end('hello');
//  
//   
//});
//
//server.listen(8080);
