var sql=require('mysql');

var con=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3307,
    database:'studentdatabase'
});

con.connect(function(err){ 
    if(err){throw err;}
    console.log('Connected Successfully!');

    con.query('select * from stdinfo',function(err,rs){
        console.log(rs);
    });
});