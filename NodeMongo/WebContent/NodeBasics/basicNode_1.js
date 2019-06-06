var greetings="Hello World from Dinesh";
console.log(greetings);
var random=Math.random(15*6);
console.log(random);
var name={firstName: "Dinesh", lastName: "Dasaratharao"};
console.log("first Name: " +name.firstName+" last Name: "+name.lastName);

var numbers=[0,1,2,3];
console.log("numbers[0]:"+numbers[0]);
console.log("numbers[1]:"+numbers[1]);
var os=require('os');


console.log('platform::::'+os.platform());

function displayMessage(msg)
{
	console.log("Msg:"+msg);
}
function addTwonNumber(x,y)
{
var total=0;
total=x+y;
return total;
}
displayMessage("hello from dinesh");
console.log("two number addition:"+addTwonNumber(20,4));

