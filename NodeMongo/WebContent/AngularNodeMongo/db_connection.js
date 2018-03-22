var MongoClient = require('mongodb').MongoClient,
assert = require('assert');
var currentConnection=null;

//^ export singleton connection object

exports.getDBConnection= function(callback){
	if(currentConnection)
		{
			console.log("Connection object found, so returning it");
			callback(currentConnection);
		}
	else
		{
		console.log(" No connection object found, so creating one");
		// Connect to the db
		MongoClient.connect("mongodb://localhost:27017", function (err, db) {
			assert.equal(null, err);
			console.log("Connected successfully to server");
			callback(db.db("myapp"));
		});
		}
};