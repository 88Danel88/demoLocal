// const http = require('http');
// const express = require('express')


// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

var express = require ('express'),
    app = express ();

// APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));

// INDEX ROUTE
app.get("/", function(req, res){
  res.render("index");
});

// LISTEN TO A PORT
app.listen(3000, function(){
      console.log("SERVER IS UP! LISTENING AT PORT 3000")  
});
