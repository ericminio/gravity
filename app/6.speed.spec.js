require('./lib/world');

describe('Speed', function() {

    beforeEach(function() {
        plane.start();
        plane.document = undefined;
    });
    
    it('is zero at the begining', function() {
        expect(plane.speed.vx).toEqual(0);
    });
    
    it('comes from engine', function() {
        plane.engine = 10;
        plane.updateAfterDelay(1000);
        
        expect(plane.speed.vx).toEqual(10);
    });
    
    it('increases with time when engine is steady', function() {
        plane.engine = 10;
        plane.updateAfterDelay(1000);
        plane.updateAfterDelay(1000);
        
        expect(plane.speed.vx).toEqual(20);
    });
    
    describe('representation', function() {
    
        it('exists in the page', function() {
            var html = require('fs').readFileSync('./app/lib/index.html').toString();
            var page = require('cheerio').load(html);
        
            expect(page('#speed').length).toEqual(1);
            expect(page('#speed').text()).toEqual('0');
        });

        it('is updated regularly', function() {
            var document = require('jsdom').jsdom(
                '<body><div id="speed">0</div></body>'
            );
            plane.isRenderedIn(document);
            var speedElement = document.getElementById('speed');
            plane.engine = 10;
            plane.updateAfterDelay(1000);
            
            expect(speedElement.innerHTML).not.toEqual('0');
        });
        
        it('rounds speed value to 2 digits', function() {
            plane.speed = { vx: 12.39999 };
            var document = require('jsdom').jsdom(
                '<body><div id="speed">0</div></body>'
            );
            updateDasboard(document);
            
            expect(document.getElementById('speed').innerHTML).toEqual('12.40');
        });
    });
});