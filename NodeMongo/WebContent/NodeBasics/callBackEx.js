function loggingItem(item, callback)
{
	console.log("logging Item:"+item);
	
//	process.nextTick(function (){
		callback(item);
	//});
}

loggingItem('Car', function (msg){
	console.log('Drove a '+msg);
});

loggingItem('Truck', function(msg){
	console.log('Rod a '+msg);
});

loggingItem('Jeep', function(msg){
	console.log('Saw a '+msg);
});