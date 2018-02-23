var events=require('events');

//define account obj

Account.prototype=events.EventEmitter.prototype;

function Account()
{
	this.balance=0;
	events.EventEmitter.call(this);
	
	this.deposit= function (amount){
		this.balance+=amount;
		this.emit('balanceChanged');
	};
	this.withdraw= function(amount){
		this.balance-=amount;
		this.emit('balanceChanged');
	};
}

//handlers

function displayBalance()
{
	console.log('Acount Balance: $%d',this.balance);
}

function checkOverdraft()
{
	if(this.balance < 0)
		{
		 	console.log("Account Overdrawn:"+this.balance);
		}
}

//handlers with parameter
function checkGoal(acc,goal)
{
	if(acc.balance > goal)
		{
			console.log("Goal Achieved!!!");
		}
}

//implement event/listner

var account= new Account();
account.on("balanceChanged",displayBalance);
account.on("balanceChanged",checkOverdraft);
account.on("balanceChanged", function (){
	checkGoal(this,1000);
});


//test the event/listner

account.deposit(500);
account.deposit(600);
account.withdraw(1200);