var censoredWords=["Good","Bad","Mad"];
var customerCensoredWords=[];

function censor(inStr)
{	
	for (var i=0; i< censoredWords.length;i++)
		{
			inStr=inStr.replace(censoredWords[i],"***");
		}
	for (var i=0; i< customerCensoredWords.length;i++)
	{
		inStr=inStr.replace(customerCensoredWords[i],"***");
	}
	console.log("inStr::"+inStr);
	return inStr;
}

function addCensoredWords(word)
{
	customerCensoredWords.push(word);
}

function getCensoredWords()
{
	return  censoredWords.concat(customerCensoredWords);
}

exports.censor=censor;
exports.addCensoredWords=addCensoredWords;
exports.getCensoredWords=getCensoredWords;
