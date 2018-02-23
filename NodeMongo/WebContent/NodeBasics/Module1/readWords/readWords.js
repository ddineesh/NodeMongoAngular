var censor= require('censorify');
console.log(censor.getCensoredWords);
console.log(censor.censor("Some are Good, some are Mad and some are Bad"));
censor.addCensoredWords("Poda");
console.log(censor.getCensoredWords);
console.log(censor.censor("Some are Good, some are Mad and some are Bad, Poda inga"));