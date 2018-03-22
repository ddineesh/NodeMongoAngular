var MongoClient=require('mongodb').MongoClient,
	assert=require('assert');

var express=require('express');

//export other modules to support session and cookie

var bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');
var expressSession=require('express-session');
var mongoStore= require('connect-mongo')({session: expressSession});

var app=express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

var dbConn=require('./db_connection');


//connect mongo DB
	
	MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
		assert.equal(null, err);
		  console.log("Connected successfully to server");
		var myDB=db.db("myapp");
		//add sesssion store
		app.use(cookieParser());
		app.use(expressSession({
			secret: 'SECRET',
			cookie: {maxAge: 15*16*1000},
			store: new mongoStore({
				db:myDB,
				collection: 'sessions'
			})
		}));

	// extrenal file

	require('./routes')(app);
	app.listen(80);
});




