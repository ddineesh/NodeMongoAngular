var MongoClient=require('mongodb').MongoClient,
	assert=require('assert');
var express= require('express');
var cookieParser= require('cookie-parser');
var expressSession= require('express-session');
var mongoStore= require('connect-mongo')({session: expressSession});


MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
	assert.equal(null, err);
	  console.log("Connected successfully to server");
	var myDB=db.db("sessionDB");
	var app=express();
	app.use(cookieParser());
	app.use(expressSession({
		secret: 'SECRET',
		cookie: {maxAge: 15*16*1000},
		store: new mongoStore({
			db:myDB,
			collection: 'sessions'
		})
	}));
	
	app.get('/library', function (req, res){
		var response= "<h1> Welcome to Library</h1>";
		if(req.session.restricted){
			response+="<h3> You have been restricted for this section"+
			req.session.restrictedCount+" times</h3>";
		}
		res.send(response);	
	});
	
	app.get('/restricted', function(req,res){
		req.session.restricted=true;
		if(!req.session.restrictedCount){
			req.session.restrictedCount=1;
			}
		else{
			req.session.restrictedCount+=1;
			}
		res.redirect('/library');
	});
	
	app.get('/clear', function(req,res){
		req.session.destroy( function (){
			res.redirect('/library');
		});
	});
	app.listen(80);
});