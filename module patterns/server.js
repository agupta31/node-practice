//pattern 1
var greeting=require("./greet/greet1");
greeting();
//pattern 2
var greet2=require("./greet/greet2").greet;
greet2();
//pattern 3
var greet3=require("./greet/greet3");
greet3.getFullname();
//can override the properties of the object returned
greet3.firstName="badhrel";


//requiring the same object.V8 saves the last instance of the object in chache and returns
//the same instance.So firstname wil be the changed firstname.
var greet3b=require("./greet/greet3");
console.log(greet3b.firstName);


var greet5=require("./greet/greet5");
greet5();
