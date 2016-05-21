var fs=require("fs");
//gives a readable and writable stream which enables us to compress data.
var zlib=require("zlib");

var readFile=fs.createReadStream(__dirname+
  "/greet/greet.txt");


  var writeFile=fs.createWriteStream(__dirname+"/greet/greet.txt.gz");

 var gzip=zlib.createGzip();
//pipe connects two streams together.Transferring data from a readable stream to
//a writeable stream.Using stream is always encouraged because it minimizes
//the buffer size that we are working with thereby reducing the memory that
//our application is using.Thus making the application faster and performant.

 readFile.pipe(gzip).pipe(writeFile);
