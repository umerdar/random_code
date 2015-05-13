var express = require('express');
var app = express();

app.get('/', function(req, res) {
  		console.log(__dirname);
  	res.sendFile(__dirname + '/public/index.html')	
});

var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});