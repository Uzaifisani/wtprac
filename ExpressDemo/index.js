const express= require('express');
var app=express();
var bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get('/register',function(req,res){
    res.sendFile(__dirname+'/register.html');
})

app.post('/submitForm',function(req,res){
    res.send(req.body.email);
})

app.listen(7000);