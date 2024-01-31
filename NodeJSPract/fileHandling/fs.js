const fs= require('fs');
var data1;
exports.MyServer= function(){fs.writeFile('Second.txt','This is Server',function(err){
    if(err){throw err;}
}) 
return 'File Created Successfully';
}

exports.ReadFile=function(){
    fs.readFile('Second.txt','utf8',function(err,data){
        if(err){throw err;}
        data1=data;
    })
    return 'File Data:'+data1;
}

