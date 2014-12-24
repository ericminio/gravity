var application = require('./lib/application');
var request = require('request');

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
    
    it('serves index.html', function(done) {
        request('http://localhost:5000', function(error, response, body) {
            var html = require('fs').readFileSync('./app/lib/index.html').toString();
            expect(body).toEqual(html);
            done();
        });       
    });
});