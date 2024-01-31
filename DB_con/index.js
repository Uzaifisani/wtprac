var express = require('express');
var mysql = require('mysql');
var db=require('./database');
var session=require('express-session');
var flash=require('express-flash');

var app = express();

var bodyParser = require('body-parser');
const { stringify } = require('querystring');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(flash());

app.use(session({
   secret: 'IfeeJ9B,!c^aGqV',
   resave: false,
   saveUninitialized: true,
   cookie: {maxAge: 60000}
}))

app.get('/', function(req, res){
    //res.sendFile(__dirname+'/register.html');
    res.sendFile(__dirname+'/login.html');
  });

app.post('/auth',function(req,res){
   let name=req.body.email;
   let password=req.body.password;

   if(name && password)
   {
      db.query('select * from user where username=? and password=?',[name, password], function(err,result){
         if(err) throw err;
         if(result.length > 0)
         {
            req.session.loggedin=true;
            req.session.name=name;
            res.redirect('/register');
         }
         else
         {
            res.send('Incorrect email and/or Password');
         }
         res.end();
      });
   }
   else
   {
      res.send('Please enter email and password');
      res.end();
   }
});

app.get('/register', function(req, res){
   if(req.session.loggedin){
      res.sendFile(__dirname+'/register.html');
   }
 });

app.post('/formsubmit', function(req, res){
   //res.send(JSON.stringify("Hello "+req.body.name+" "+req.body.surname));
   if(req.session.loggedin)
   {
      var fname=req.body.name;
      var lname=req.body.surname;
      var email=req.body.email;
      var need=req.body.need;
      var msg=req.body.message;

      var sql=`insert into contactform (fname,lname,email,need,message) values ("${fname}", "${lname}", "${email}", "${need}", "${msg}")`;
      db.query(sql, function(err, result){
         if(err) throw err;
         console.log('Record Inserted');
         req.flash('success', 'Data added successfully!!');
         res.redirect('/');
      })
   }
   });

app.listen(5003,()=>{
   console.log("Server is running")
})