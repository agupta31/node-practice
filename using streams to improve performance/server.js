 var http=require("http");
 var fs=require("fs");

 http.createServer(function(req,res){
      res.writeHead(200,{"content-type":"text/html"});
    //using streams instead of buffers to store data improves performance.Data is now send in chunks so
    //small buffers are required which improves processing time and makes the application
    //faster.response object is a writeable stream.
      fs.createReadStream(__dirname+"/index.htm").pipe(res);
 }).listen(1255,"127.0.0.1");
