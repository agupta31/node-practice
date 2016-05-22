 var http=require("http");
 var fs=require("fs");

 http.createServer(function(req,res){
      res.writeHead(200,{"content-type":"text/html"});
       if(req.url==="/"){
          fs.createReadStream(__dirname+"/index.html").pipe(res);
       }
       else if(req.url==="/api"){
         res.writeHead(200,{"content-type":"application/json"});
            var person={
                firstname:"akash",
                lastname:"gupta"
            };
             res.end(JSON.stringify(person));
       }
       else{
          res.writeHead(404);
          res.end("not found");
       }

 }).listen(1255,"127.0.0.1");
