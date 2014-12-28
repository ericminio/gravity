require('./lib/world');

describe('Plane', function() {

    beforeEach(function() {
        plane.start();
    });

    it('is on the ground', function() {
        expect(plane.position.z).toEqual(0);
    });
    
    describe('representation', function() {
        
        it('exists in the page', function() {
            var html = require('fs').readFileSync('./app/lib/index.html').toString();
            var page = require('cheerio').load(html);
        
            expect(page('#plane').length).toEqual(1);
            expect(page('#plane').attr('src')).toEqual('/lib/plane.png');     
        });

        var document;
        var planeDrawing;
        
        beforeEach(function() {
            document = require('jsdom').jsdom(
                '<body><img id="plane"/><div id="ground"></div></body>'
            );
            document.getElementById('ground').style.top = '300px';
            planeDrawing = document.getElementById('plane');
            planeDrawing.height = 50;
        });

        it('is displayed on the ground when altitude is zero', function() {
            plane.position.z = 0;
            displayPlane(document, plane);
        
            expect(planeDrawing.style.top).toEqual('250px');
        });
    
        it('is displayed above the ground when altitude is positive', function() {
            plane.position.z = 100;
            displayPlane(document, plane);
        
            expect(planeDrawing.style.top).toEqual('50px');        
        });
    });
});