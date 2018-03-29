var MongoClient= require('mongodb').MongoClient
,assert=require('assert');
var crypto= require('crypto');
var ObjectID= require('mongodb').ObjectID;
var myDB=null;
var users=null;

//^ encrypte the password

function hashPW(pwd){
	
	return crypto.createHash('sha256').update(pwd).
			digest('base64').toString();
}

//connect mongo DB

MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
	assert.equal(null, err);
	  console.log("Connected successfully to server");
	 myDB=db.db("myapp");
	 users=myDB.collection('users');
});

exports.signup = function(req, res)
{
	console.log(' user name in the form: '+req.body.username);
	console.log(' password in the form: '+req.body.password);
	console.log(' email in the form: '+req.body.email);
	var user= {username: req.body.username,
				hashed_password: hashPW(req.body.password),
				email: req.body.email,
				color: 'unknown'};
	users.save(user,{w:1}, function(err,result){
		if(err){
			res.session.error=err;
			res.redirect('/signup');
		}else {
			req.session.userID=user._id;
			req.session.username=user.username;
			req.session.msg="Authenticated as "+ user.username;
			res.redirect('/signup');
		}
	});
};


exports.login= function(req,res){
	users.findOne({username: req.body.username}, function(err, user){
		if(!user)
			{
			err="User Not Found.";
			} else if(user.hashed_password==hashPW(req.body.password.toString())){
				req.session.userID=user._id;
				req.session.username=user.username;
				req.session.msg=" Authenticated as "+ user.username;
			}
			else{
				err='Authentication failed!!!'
			}
		if(err){
			req.session.regenerate(function(){
				req.session.msg=err;
				res.redirect('/login');
			});
		}
	});
};