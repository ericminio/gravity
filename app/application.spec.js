var application = require('./lib/application');
var request = require('request');
var fs = require('fs');

describe('application', function() {

    
    beforeEach(function() {
        application.start();
    });
    
    afterEach(function() {
        application.stop(); 
    });
    
    it('defines an application', function() {
        expect(application).toBeDefined();
    });

    it('starts a server on port 5000', function(done) {
        request('http://localhost:5000', function(error, response, body) {
            expect(error).toBeNull();
            expect(response.statusCode).toEqual(200);
            done();
        });       
    });
    
    it('serves index.html with text/html header', function(done) {
        request('http://localhost:5000', function(error, response, body) {
            expect(response.headers['content-type']).toEqual('text/html');
            var html = fs.readFileSync('./app/lib/index.html').toString();
            expect(body).toEqual(html);
            done();
        });       
    });
    
    it('serve the image of the plane with image/png header', function(done) {
        request({ url:'http://localhost:5000/lib/plane.png', encoding:'binary'}, function(error, response, body) {
            expect(response.headers['content-type']).toEqual('image/png');
            var plane = fs.readFileSync('./app/lib/plane.png', 'binary');
            expect(body).toEqual(plane);
            done();
        });       
    });
});