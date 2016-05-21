//creating a web server:
//requiring in built http module
var http=require("http");
//the callback function gets triggered whenever there is a request from the browser.
//imagine this as the listener attached to a request property on the events object
//events={
    // 'request':[listener];
//}
http.createServer(function(req,res){
        res.writeHead(200,{'content-type':"text/plain"});
  //res.end states that I am done sending and this is the last thing that I am going to send.
        res.end("hello world");
}).listen(1255,"127.0.0.1");//1255 is the port on which node is listening to.So
//it is going to respond to a request from socket address 127.0.0.1:1255
