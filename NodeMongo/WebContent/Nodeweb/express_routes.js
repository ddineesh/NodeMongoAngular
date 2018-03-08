var express=require('express');
var app= express();

app.get('/', function(req, res){ 
	res.send("Get Index");
});

app.get('/author', function (req, res){
	res.send(" Dinesh D");
});

app.param('userid', function(req,res,next,value){
	console.log("Request received fromt the user:"+value);
	next();
});

app.get('/user/:userid', function (req,res){
	var response= 'Get User: '+ req.param('userid');
	res.send(response);
});

app.listen(80);