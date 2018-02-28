var MongoClient= require('mongodb').MongoClient;

//Connection String format
//mongodb://usernmae:password@host/database
MongoClient.connect("mongodb://localhost:27017/word", function (err, db) {
	if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
    db.close();
	/*setTimeout(function () { db.close();},3000);*/
});