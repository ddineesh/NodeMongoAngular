var words= ['D','I','N','E','S','H'];
var wordsObject= {
		word: words[0],
		size: words.length,
		letters: words,
		stats: {vowels: 2, consonants: 3}
}

//create db and populate

var mongo= new Mongo('localhost');
var wordsDB= mongo.getDB('words');
var wordsColl= wordsDB.getCollection('words_stats');
wordsColl.drop();
wordsColl.insert(wordsObject);
var cursor=wordsColl.find();
print("Item inserted: " + cursor.count());
printjson(cursor.next());