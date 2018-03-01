var MongoClient = require('mongodb').MongoClient,
assert = require('assert');

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
	assert.equal(null, err);
	  console.log("Connected successfully to server");

	var myDB=db.db("words"); 
    
	myDB.collection("words_stats", function ( err, collection){
		countItems(collection);
	});
	
    setTimeout(function () { db.close();},3000);
              
});

function countItems(collection)
{
	collection.count( function (err, count){
		console.log("number of items:"+count);
	});
}

