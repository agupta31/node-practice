var express=require("express");
var app=express();
var bodyParser=require("body-parser");

app.listen(1255,function(){
   console.log("server started..");
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");


app.get("/",function(req,res){
        res.render("index");
});

app.post("/calculate",function(req,res){
        res.render("display",{data:req.body.inputText});
});
