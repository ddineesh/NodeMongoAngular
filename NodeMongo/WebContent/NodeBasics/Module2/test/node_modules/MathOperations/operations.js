
function addNumbers(x,y)
{
	console.log(" Add two numbers called");
	var total=0;
	total=x+y;
	return total;
}

function subNumbers(x,y)
{
	console.log(" subtract two numbers called");
	var total=0;
	total=x-y;
	return total;
}

function mulNumbers(x,y)
{
	console.log(" Multiple two numbers called");
	var total=0;
	total=x*y;
	return total;
}

function divNumbers(x,y)
{
	console.log(" divide two numbers called");
	var total=0;
	total=x/y;
	return total;
}

exports.addNumbers=addNumbers;
exports.subNumbers=subNumbers;
exports.mulNumbers=mulNumbers;
exports.divNumbers=divNumbers;
