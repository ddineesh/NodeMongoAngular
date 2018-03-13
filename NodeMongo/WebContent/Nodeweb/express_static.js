var express=require('express');
var app=express();

app.use('/', express.static('../static'));
app.use('/images',express.static('../images'));

app.get('/', function (req,res){
	res.redirect('/static.html');
});

app.listen(80);	