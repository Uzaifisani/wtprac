var sql=require('mysql');

var con=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3307,
    database:'employee'
});

con.connect(function(err){
    if(err){throw err;}
    console.log('Connected');
    sql2='CREATE TABLE employeeInfo(empId int,empName varchar(50));'
        con.query(sql2,function(err){
            if(err){throw err;}
            console.log('Table Created!!')
        });
});