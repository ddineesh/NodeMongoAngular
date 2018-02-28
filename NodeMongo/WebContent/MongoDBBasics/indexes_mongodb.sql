use indexDB;
--new collection
db.cars.insert({vin: "",make: "", model: "", color: "", price: "", year: ""});
db.cars.getIndexes();

db.cars.ensureIndex({make: 1, model: 1});
db.cars.getIndexes();

--unique indexes

db.cars.ensureIndex({vin: 1},{unique: true});
db.cars.getIndexes();

--drop indexes

db.cars.dropIndex({make: 1, model: 1});
db.cars.getIndexes();
