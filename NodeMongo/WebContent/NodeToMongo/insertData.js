var MongoClient= require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/test", function (err, db){
	
	console.log(" Data base connected ...");
	
	var myDB=db.db("words");
	
	myDB.collection('Persons', function (err, collection) {
	    collection.drop();
	    console.log(" Persons drop successfully ...");
	    collection.insert({ id: 1, firstName: 'Dinesh', lastName: 'Dasaratharao' });
	    collection.insert({ id: 2, firstName: 'Subha', lastName: 'Dinesh' });
	    collection.insert({ id: 3, firstName: 'Ilakkiya', lastName: 'Dinesh' });
	    collection.insert({ id: 3, firstName: 'Oviya', lastName: 'Dinesh' });
	    
	    console.log(" Persons created successfully ...");
	    
	    myDB.collection('Persons').count(function (err, count) {
	        if (err) throw err;
	        
	        console.log('Total Rows: ' + count);
	        
	    });
	    findOne(collection);
	    setTimeout( function (){ db.close();}, 3000);
	});
});

function findOne(collection)
{
	var query={};
	collection.findOne(query, function (err, item){
		console.log(item);
	});
}