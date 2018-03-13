var express= require('express');
var ejs= require('ejs');

var app= express();
app.set('views', '../views');
app.engine('html', ejs.renderFile);

app.locals = {
	uname: "Dinesh",
	vehicle: "Honda CRV",
	terrian: "Mountains",
	climate: "winter",
	location: "Prs Hts"
};

app.get('/ejs', function(req, res){
// render template with local variables
	app.render('user_ejs.html', function(err, renderedData){
		res.send(renderedData);
	});
});

//other local variables

app.get('/other', function(req,res){
	var otherLocals = {
			uname: 'Dina',
			vehicle: 'Camry'
	};
	app.render('user_ejs.html', otherLocals, function(err, renderedData){
		res.send(renderedData);
	});
});	

app.listen(80);