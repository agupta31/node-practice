
var fs=require("fs");

//reading file synchronously from the hard drive
//this causes JS to read this file synchronously.This is not good
//if we have multiple users requesting the same file would end up
//waiting a long time if the file is large.
var greet=fs.readFileSync(__dirname+ "/greet/greet.txt","utf8");
console.log(greet);

//asynchronous callback-this is run asynchronously by node(libuv)
//libuv asks OS to read the file.OS keeps this in the event queue.When OS completes
//reading the file libuv asks V8 to run the callback attached to the event.This callback
//is known as error first callback.
var greet2=fs.readFile(__dirname+ "/greet/greet.txt","utf8",function(err,data){
  if(err){
       console.log(err);
  }
  else {
     console.log(data);
  }

} );
//v8 will run this first and only when this is finished will it run the call back attached
//to the above event.
  console.log("i am done!");

  //output will be:
  //hello world
  //i am done
  //hello world
