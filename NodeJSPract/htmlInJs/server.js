var http=require('http');
var fs= require('fs');

fs.readFile('./index.html',function(err,html){
    if(err){throw err;}
    http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('This is my Sever');
        res.write(html);
        res.end();
    }).listen(8086)
});