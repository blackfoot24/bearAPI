var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser());

var monte = {name: 'Leyroy', id: 1100, age: 43, gender: 'male'};
var paul = {name: 'Jenkins', id: 1110, age: 34, gender: 'female'};

var bears = [monte, paul];


app.get('/api/bear/:id', function(req, res){
	var thisbear = " "
	
	var id = req.params.id;
	
	console.log(id);

		bears.forEach(function(bear){
		if(bear.id.toString() === id.toString()){
			thisbear = bear
			}
		});

	res.json(thisbear);
});

app.delete('/api/bear/:id', function(req, res){
	var bearToDelete = " ";
	
	var id = req.params.id;
	
	console.log(id);

	bears.forEach(function(bear){
	if(bear.id.toString() === id.toString()) {
		bearToDelete = bear 

		index = bears.indexOf(bearToDelete)

		}
	})
	res.json(bears.splice(index,1));
});
	

app.post('/api/bear', function(req, res){
	

	var newBear = {};
	newBear.name = req.body.name;
	newBear.age = req.body.age;
	newBear.gender = req.body.gender;
	newBear.id = new Date().getTime();

	console.log('pushing: ', newBear);

	bears.push(newBear);

	res.json(bears);

});

app.listen(3000, function(){
	console.log('the server is up and running..')
});