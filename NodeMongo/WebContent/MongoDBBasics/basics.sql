--This command will start the mongo db 
mongod --dbpath c:\Dinesh\MongoDB\data\db 
--This will show all the Data base currently
show dbs;
--This command will show all the collections in the current DB

show collections;

--This below two commands will shutdown the server
use admin;
db.shutdownServer();

--the below command will use the db mentioned, if not exists will create one for you

use myDB;

--This command will find the documents
db.myCollection.find();

db.myCollectoin.insert({name: "Dinesh", score: 10});

db.myCollection.insert([
{name: "Suba", score: 9},
{name: "Ila", score: 8},
{name: "Ovi", score: 8}
]);

db.myCollection.find();

use breakFast;
db.breakFast.insert({name: "Idly", taste: "yes", health: "yes"});
db.breakFast.insert({name: "Dosa", taste: "yes", health: "yes"});
db.breakFast.insert({name: "Pori", taste: "yes", health: "yes"});
db.breakFast.find();

--below commands for find
db.myCollections.findOne(); -- this will find the first document
db.myCollections.find({score : 9}); -- this will find the score equals 9
db.myCollections.find({score: {$gt : 7}});
db.myCollections.find({score: {$lt : 8}});
db.myCollections.find({score: {$in : [7,9]}});
db.myCollections.find({$and : [{score: 9},{name: "Dinesh"}]});
