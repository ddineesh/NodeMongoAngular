var greetings='Hello World from Dinesh';
console.log(greetings);

var random=Math.floor(Math.random() * 10);
console.log('Random:'+random);

function displayMsg(msg)
{
	console.log(msg);
}

var arr=["One","Two","Three"];
console.log('arr[0]-'+ arr[0]);
console.log('arr[2]-'+arr[2]);

var obj={first: "Dinesh", last: "Dasaratha Rao"};

console.log('First Name:'+obj.first);
console.log('Last Name:'+obj.last);

// load require from modules

var os= require('os');
console.log('Platform:'+os.platform);