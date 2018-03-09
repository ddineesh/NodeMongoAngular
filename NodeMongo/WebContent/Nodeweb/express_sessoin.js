var mongoClient=require('mongodb').MongoClient;
var express= require('express');
var cookieParser= require('cookie-parser');
var expressSession= require('express-session');
var mongoStore= require('connect-mongo')({sesion: expressSession});