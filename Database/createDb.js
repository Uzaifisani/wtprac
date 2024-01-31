var sql=require('mysql');

var con=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3307,
});

con.connect(function(err){
    if(err){throw err;}
    console.log('Connected');
    sql1='CREATE DATABASE employee';
    con.query(sql1,function(err){
        if(err){throw err;}
        console.log('Database Created');
    });
});