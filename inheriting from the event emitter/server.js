
//inheriting from the event emitter
var eventEmitter=require("events");
var util=require("util");

function Greetr(){

}

util.inherits(Greetr,eventEmitter);

Greetr.prototype.greet=function(data){
     console.log("hello");
     this.emit("greet",data);
};

var grtr=new Greetr();
grtr.on("greet",function(data){
     console.log("hi there "+data);
});

grtr.greet("tony");
