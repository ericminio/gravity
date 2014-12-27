require('./lib/world');

describe('Pilot', function() {

    beforeEach(function() {
        plane.start();
    });

    it('can increase throttle with key t', function() {
        pilot({ keyCode:84 });
        
        expect(plane.engine).toEqual(1);
    });
    
    it('can decrease throttle with key f', function() {
        pilot({ keyCode:84 });
        pilot({ keyCode:70 });
        
        expect(plane.engine).toEqual(0);
    });
    
});