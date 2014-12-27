require('./lib/world');

describe('Plane', function() {

    beforeEach(function() {
        plane.start();
    });

    it('has an altitude of 0 at the begining', function() {
        expect(plane.position.z).toEqual(0);
    });
    
    it('has an engine set to 0 at the begining', function() {
        expect(plane.engine).toEqual(0);
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
    
    describe('throttle', function() {
        
        beforeEach(function() {
            plane.start();
        });
        
        it('can not be below zero', function() {
            plane.decreaseThrottle();
            
            expect(plane.engine).toEqual(0);
        });

        it('can not be above 2500', function() {
            plane.engine = 2500;
            plane.increaseThrottle();
            
            expect(plane.engine).toEqual(2500);
        });
        
        it('updates the displayed engine value', function() {
            var document = require('jsdom').jsdom(
                '<body><div id="engine">0</div></body>'
            );
            plane.isRenderedIn(document);
            var engineElement = document.getElementById('engine');

            plane.increaseThrottle();            
            expect(engineElement.innerHTML).toEqual('1');

            plane.decreaseThrottle();            
            expect(engineElement.innerHTML).toEqual('0');
        });
    });
});