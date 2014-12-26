require('./lib/world');

describe('Plane', function() {

    it('has an altitude of 0 at the begining', function() {
        expect(plane.position.z).toEqual(0);
    });
    
    describe('drawing', function() {
        
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
            displayPlane(document);
        
            expect(planeDrawing.style.top).toEqual('250px');
        });
    
        it('is displayed above the ground when altitude is positive', function() {
            plane.position.z = 100;
            displayPlane(document);
        
            expect(planeDrawing.style.top).toEqual('50px');        
        });
    });
});