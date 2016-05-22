 var http=require("http");
 var fs=require("fs");

 http.createServer(function(req,res){
      res.writeHead(200,{"content-type":"application/json"});
       var person={
              firstname:"akash",
               lastname:"gupta"
       };
       //seriazling the object(ie.converting the object int a format to be stored or
     //transferred)
        res.end(JSON.stringify(person));
 }).listen(1255,"127.0.0.1");
