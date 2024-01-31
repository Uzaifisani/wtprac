// Inbuilt Module fs(file System)
const fs= require('fs') 
text1='this is demo file of Uzaif';
fs.writeFile('first.txt',text1,function(err){
    if(err){throw err;}
    console.log('File Created Successfully');
})

//apend Files
fs.appendFile('first.txt',' data to  append',function(err){
    if(err){throw err;}
    console.log('Data Append Successfully');
})

//Read File
fs.readFile('first.txt','utf8',function(err,data){
    if(err){throw err;}
    console.log(data);
})
//Open Files
fs.open('first.txt','w+',function(err){
    if(err){throw err;}
    console.log('Filed Opened');
})

//Rename The Files 
fs.rename('first.txt','demo.txt',(err)=>{
    if(err){throw err;}
    console.log('File Renamed Successfully');
})

//Delete the Files
fs.unlink('demo.txt',(err)=>{
    if(err){throw err;}
    console.log('File Deleted Successfully');
})