var MongoClient= require('mongodb').MongoClient,
	assert=		 require('assert');

MongoClient.connect('mongodb://localhost:27017/test', function(err, db){
			assert.equal(null,err);
			console.log(' Data base connected successfully...');
			
			var myDB=db.db("words");
			myDB.collection("Persons", function (err, collection){
				getLastNameWithDinesh(collection);
			});
			
			setTimeout(function(){ db.close(); },2000);
		});

function getLastNameWithDinesh(collection)
{
	var query={lastName: 'Dinesh'};
	var aCursor=collection.find(query);
	aCursor.count(function (err,count){
		console.log(' Last name with Dinesh : '+ count);
	});
	collection.find(query, function (err, items){
		console.log(items);
	});
}