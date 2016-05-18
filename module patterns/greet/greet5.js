//revealing module pattern:
//exposing only the proerpties and methods you want via a returned object
var greeting="hello from revealing module pattern";

function greet(){
     console.log(greeting);
}

module.exports=greet;
