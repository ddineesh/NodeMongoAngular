db.myCollections.find({name: "Dinesh"});
db.myCollections.update({name: "Dinesh"},
						{$set: {name: "Dinesh D", status: "Updated"},
						$inc: {score: -1}});
db.myCollections.update({name: "Suba"}, 
						{$set: {name: "Suba D", status: "Updated"}});

db.myCollections.update({},
					   {$inc: {score: 1}}); -- This command will update the first record of the collction
					
--update multiple documents 

db.myCollections.update({score : {$gt: 7}},
						{$inc: {score: 1}},
						{multi : true});
						
--Save operation

var doc=db.myCollections.findOne({name: "Suba D"});
doc-- we can print the doc by just put doc in mongo cell
doc.score=8;
db.myCollections.save(doc);
db.myCollections.find();

--Remove operations

db.myCollections.remove({name : "Dinesh D"});
db.myCollections.remove();-- This will remove all the docments

--Drop Collection
db.myCollections.drop();

--Drop Data base
use myDB;
db.dropDatabase();
show dbs;