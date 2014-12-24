function Application() {
    this.server = require('http').createServer(function(request, response) { 
        var index = require('fs').readFileSync('./app/lib/index.html').toString();
        response.write(index);
        response.end(); 
    });
};

Application.prototype.start = function() {
    this.server.listen(5000);
};

Application.prototype.stop = function() {
    this.server.close();
};

module.exports = Application;