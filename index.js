var express = require('express');
var app = express();

var port = 3000;


app.get('/', function(req, res) {
	res.send("<h1>This is Home page</h1>");
});


app.get('/admin', function(req, res) {
	res.send("<h1>This is Admin page</h1>");
});

app.listen(port , function()  {
	console.log("Server listenning on port " + port);
});