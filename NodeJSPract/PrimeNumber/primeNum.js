const http= require('http');
const pm=require('./displayPrime');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Prime Number from 1-100 are:');
    res.write(''+pm.PrimeNumber());
    res.end();
}).listen(8086);