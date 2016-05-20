
var Emitter=require("./emitter");

var emtr=new Emitter();
  emtr.on("greet",function(){
        console.log("hello");
  });
  emtr.on("greet",function(){
      console.log("hola");
  });

  emtr.emit("greet");
