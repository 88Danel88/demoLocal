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

const express = require ('express'),
    app = express (),
    port = process.env.PORT || 8080,
    ip = process.env.IP;

// APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));

// INDEX ROUTE
app.get("/", function(req, res){
  res.render("index");
});

// LISTEN TO A PORT
app.listen(port, ip, function(){
      console.log("SERVER IS UP! at PORT" + " " + port)  
});
