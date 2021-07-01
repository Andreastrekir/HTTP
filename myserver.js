const http = require("http");

const server = http.createServer((req, res) =>{
    res.setHeader("Content-Type", "application/json");
    res.end("<h1> This is my first response</h1><br><h2>This is my second response</h2><br><h3>This is my third response</h3>");
});

server.listen(3000, () =>{
    console.log("listening port 3000")
});


