require('./lib/world');

describe('Engine', function() {

    beforeEach(function() {
        plane.start();
    });

    it('is off by default', function() {
        expect(plane.engine).toEqual(0);
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
    
    it('can be increased with key t', function() {
        pilot({ keyCode:84 });
        
        expect(plane.engine).toBeGreaterThan(0);
    });
    
    it('can be decreased with key f', function() {
        pilot({ keyCode:84 });
        pilot({ keyCode:70 });
        
        expect(plane.engine).toEqual(0);
    });
    
    describe('representation', function() {
        
        it('exists in the page', function() {
            var html = require('fs').readFileSync('./app/lib/index.html').toString();
            var page = require('cheerio').load(html);
        
            expect(page('#engine').length).toEqual(1);
            expect(page('#engine').text()).toEqual('0');
        });

        it('is updated along engine value', function() {
            var document = require('jsdom').jsdom(
                '<body><div id="engine">0</div></body>'
            );
            var engineElement = document.getElementById('engine');

            plane.increaseThrottle();  
            updateEngineDrawing(document, plane);          
            expect(engineElement.innerHTML).toEqual('1');

            plane.decreaseThrottle();            
            updateEngineDrawing(document, plane);          
            expect(engineElement.innerHTML).toEqual('0');
        });
    });
});