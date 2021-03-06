require('./lib/world');

describe('Speed X', function() {

    beforeEach(function() {
        plane.start();
    });
    
    it('is zero at the begining', function() {
        expect(plane.speed.vx).toEqual(0);
    });
    
    it('comes from engine', function() {
        plane.engine = 10;
        plane.updateAfterDelay(1000);
        
        expect(plane.speed.vx).toEqual(10);
    });
    
    it('increases with time % to acceleration', function() {
        plane.acceleration = { ax:10 };
        plane.updateSpeedAfterDelay(1000);
        plane.updateSpeedAfterDelay(1000);
        
        expect(plane.speed.vx).toEqual(20);
    });
    
    describe('representation', function() {
    
        it('exists in the page', function() {
            var html = require('fs').readFileSync('./app/lib/index.html').toString();
            var page = require('cheerio').load(html);
        
            expect(page('#speed').length).toEqual(1);
            expect(page('#speed').text()).toEqual('0');
        });

        it('is updated along speed value of the plane', function() {
            var document = require('jsdom').jsdom(
                '<body><div id="speed">0</div></body>'
            );
            var speedElement = document.getElementById('speed');
            plane.speed = { vx: 10 };
            updateSpeedDrawing(document, plane);
            
            expect(speedElement.innerHTML).not.toEqual('0');
        });
        
        it('rounds speed value to 2 digits', function() {
            plane.speed = { vx: 12.39999 };
            var document = require('jsdom').jsdom(
                '<body><div id="speed">0</div></body>'
            );
            updateSpeedDrawing(document, plane);
            
            expect(document.getElementById('speed').innerHTML).toEqual('12.40');
        });
    });
});