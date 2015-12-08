/**
 * Created by ckraushaar on 08.12.2015.
 */
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {

    fs.readFile("./"+request.url, function (err, data) {
        if(err)
        {
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.end("404 Not found");
        }
        else {
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.end(data);
        }
    })
}).listen(8000);

console.log("Server running at http://127.0.0.1:8000/readme.txt");