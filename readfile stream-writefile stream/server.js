var fs=require("fs");

//creating a read stream for reading a file
//highwatermark lets us specify the buffer size
var readFile=fs.createReadStream(__dirname+
  "/greet/greet.txt",{encoding:"utf8",highWaterMark:16*1024});

//creating a writestream to write a file
  var writeFile=fs.createWriteStream(__dirname+ "/greet/greetCopy.txt");
//readfile inehrits from stream which inherits from the eventemitter .Hence
//i has access to on method.
  readFile.on("data",function(dataChunk){
        console.log(dataChunk);
//writing the file contents to the destination
        writeFile.write(dataChunk);
  });
