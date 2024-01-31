const express= require('express');
var app=express();
var bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get('/form',function(req,res){
    res.sendFile(__dirname+'/form.html');
})

app.post('/submit',function(req,res){
    res.send("<b style=\"color:navy;text-align:center; font-size:25px; font-family: Arial\">First Name: "+req.body.fName+
    "<br> Last Name: "+req.body.lName+
    "<br>Mother Name: "+req.body.mName+
    "<br>Father Name: "+req.body.faName+
    "<br>Address: "+req.body.add+
    "<br>DOB: "+req.body.dob+
    "<br>Pincode: "+req.body.pincode+
    "<br>Course: "+req.body.course+
    "<br>Email: "+req.body.email+"</b>");
    
    res.send(req.body.email);
})

app.listen(7000);