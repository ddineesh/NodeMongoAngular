--below commands for find
db.myCollections.findOne(); -- this will find the first document
db.myCollections.find({score : 9}); -- this will find the score equals 9
db.myCollections.find({score: {$gt : 7}});
db.myCollections.find({score: {$lt : 8}});
db.myCollections.find({score: {$in : [7,9]}});
db.myCollections.find({$and : [{score: 9},{name: "Dinesh"}]});

--Cursor in Mongo DB

var cursor=db.myCollections.find();
while(doc=cursor.next())
{
printjson(doc);
}

var cursor=db.myCollections.find();
cursor.count();

var cursor=db.myCollections.find();
cursor.limit(2);

db.myCollections.find({},{name:1}); -- This command will give primary _id field and the mentioned name field

db.myCollections.find({},{name:1, _id: 0});-- This command will give only name field

db.myCollections.distinct("score"); -- this will give distinct score
