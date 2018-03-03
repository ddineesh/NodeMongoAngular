var MongoClient= require('mongodb').MongoClient,
    assert=require('assert');

MongoClient.connect("mongodb://localhost:27017/test", function (err,db){
	assert.equal(null,err);
	console.log(" Data base connected successfully..");
	
	var myDB=db.db("words");
	myDB.collection("Persons", function(err, collection){
		
		sortFirstNameAsc(collection);
		sortFirstNameDsc(collection);
	});
	
	setTimeout(function(){db.close(); },3000);
});

function sortFirstNameAsc(collections)
{
	var query={lastName: 'Dinesh'};
	var sorter= [['lastName', 1]];
	var cursor=collections.find(query, {limit : 5});
	cursor=cursor.sort(sorter);
	printjson(cursor.next());
}

function sortFirstNameDsc(collections)
{
	var query={lastName: 'Dinesh'};
	var sorter= [['lastName', -1]];
	var cursor=collections.find(query, {limit : 5});
	cursor=cursor.sort(sorter);
	printjson(cursor.next());
}