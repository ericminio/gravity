require('./lib/world');

describe('Resistance', function() {

    beforeEach(function() {
        plane.start();
    });
    
    it('comes from speed', function() {
        plane.speed = { vx:2 };
        
        expect(resistance(plane)).toEqual({ rx:-0.4 });
    });
    
    it('is added to acceleration', function() {
        plane.speed = { vx:2 };
        plane.engine = 1;
        plane.updateAfterDelay(1000);
        
        expect(plane.acceleration).toEqual({ ax:0.6 });
    });
});