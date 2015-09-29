var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200);
    response.write('<p>Dog is running...</p>');
    setTimeout(function () {
        response.write('<p>Dog is done.</p>');
        response.end();
    }, 5000);

}).listen(8080);