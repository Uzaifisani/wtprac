var http=require('http');
var fs=require('./fs');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Server Created!!');
    res.write('\n'+fs.MyServer());
    res.write('\n'+fs.ReadFile());
    res.end();
}).listen(8086);
