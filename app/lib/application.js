var fs = require('fs');

var send = function(asset, response, contentType) {
    var content = fs.readFileSync(asset);
    response.writeHead(200, { 'content-type': contentType }); 
    response.end(content);
};

function Application() {
    this.server = require('http').createServer(function(request, response) { 

        if (request.url.indexOf('plane.png') !== -1) {
            send('./app/lib/plane.png', response, 'image/png');
        }
        else {
            send('./app/lib/index.html', response, 'text/html');
        }
    });
};

Application.prototype.start = function() {
    this.server.listen(process.env.PORT || 5000);
};

Application.prototype.stop = function() {
    this.server.close();
};

var application = new Application();
application.start();

module.exports = application;