var mysql=  require('mysql');
var con=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'gadaelectronic',
    port:3307
});

con.connect(function(err){
    if(err) throw err;
    console.log("Database is connected Successfully!");
});
module.exports=con;