var http=require('http');
var dt=require('./dateDemo');
var x= function(){
    return Date();
}

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('This i my First Node Js Server\n');
    res.write(dt.MyDate()+'\n');
    res.write("Date from Inner Function is "+x());
    res.write('Myself '+dt.MyName());
    res.write('\nAddition of 10+10 is '+dt.add(10,10));
    res.end();
}).listen(8086);