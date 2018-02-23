var censoredWords=['Good','Bad','Mad'];
var customerCensoredWords=[];

function censor(inStr)
{	
	for (var i; i< censoredWords.length;i++)
		{
			inStr=inStr.replace(censoredWords[i],"***");
		}
	for (var i; i< customerCensoredWords.length;i++)
	{
		inStr=	inStr.replace(customerCensoredWords[i],"***");
	}
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
