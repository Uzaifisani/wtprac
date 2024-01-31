var http=require('http');
var cal=require('./iCal');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Lets Calculate The Simple Interest\n');
    res.write('Simple Interest Is: '+cal.iCal(10000,3,8));
    res.end();
}).listen(8086);