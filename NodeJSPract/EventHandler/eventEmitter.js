var events = require('events'); //events Module
//const evem=new events.EventEmitter();
//or
const evem= new events();

var eventhandler1=function(){
    console.log('Bulb is ON ');
}
var eventhandler2=function(){
    console.log('Bulb is OFF');
}

var eventhandler3=function(msg,msg1){
    console.log(msg);
    console.log(msg1);
}

evem.on('on',eventhandler1);
evem.on('off',eventhandler2);
evem.on('off',eventhandler2);
evem.addListener('Msg',eventhandler3);
evem.emit('on');
evem.removeListener('on',eventhandler2);
evem.emit('on');
evem.emit('off');
evem.emit('Msg','Message Passed','Uzaif');