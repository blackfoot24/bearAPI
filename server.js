var express = require('express');
var app = express();

var monte = {name: 'Leyroy', id: 1100, age: 43, gender: 'male'};

var paul = {name: 'Jenkins', id: 1110, age: 34, gender: 'female'};

var bear = [monte, paul];

app.get('/api/bears', function(req, res){
	res.json(bear)
});


app.listen(3000, function(){
	console.log('the server is up and running..')
});