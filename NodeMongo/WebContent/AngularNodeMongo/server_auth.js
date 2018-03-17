var express=require('express');
var app=express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

// extrenal file

require('./routes')(app);
app.listen(80);