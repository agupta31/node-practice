var express=require("express");
var app=express();

app.listen(1255,function(){
   console.log("server started..");
});
//adding a middleware called express.static which runs bewtween my requests and response.
//this middleware is to load all the staic files in the public directory.
app.use(express.static("public"))

//create your own middleware where you do some work before going to your response route.
//we can leave out the route from the middelware then this function will get executed everytime
//no matter what the route.
app.use("/",function(req,res,next){
    console.log("hello from middleware");
     next();
});

app.get("/",function(req,res){
        res.send("<html><head></head><body>hello world</body></html>")
});
