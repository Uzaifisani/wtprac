var express = require('express');
var mysql = require('mysql');
var db=require('./database');
var session= require('express-session');
var flash= require('express-flash');

var app = express();

var bodyParser = require('body-parser');
const { stringify } = require('querystring');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(flash());//Show Flash Messages
app.use(session({
    secret:'7b42~&iu[MyTD.f',
    resave:false,
    saveUninitialized:true, 
    cookie:{maxAge:60000}
}))

app.get('/', function(req, res){
    res.sendFile(__dirname+'/register.html');
  });

app.post('/formsubmit', function(req, res){
   //res.send(JSON.stringify("Hello "+req.body.name+" "+req.body.surname));
    var fname= req.body.name;
    var lname= req.body.surname;
    var email= req.body.email;
    var need= req.body.need;
    var msg= req.body.message;
    
    var sql= `INSERT INTO contactform (fname, lname, email, need, message) VALUES ("${fname}","${lname}","${email}","${need}","${msg}")`;
    db.query(sql,function(err,result){
        if(err) throw err;
        console.log('record Inserted');
        req.flash('Success','Data added Successfully!');
        res.redirect('/');
    });    
    });

app.listen(5003,()=>{
   console.log("Server is running")
})