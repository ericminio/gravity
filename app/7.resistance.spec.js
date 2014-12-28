require('./lib/world');

describe('Resistance', function() {

    beforeEach(function() {
        plane.start();
    });
    
    it('comes from speed', function() {
        plane.speed = { vx:2 };
        
        expect(resistance(plane)).toEqual({ rx:-0.4 });
    });
    
    it('is added to engine traction', function() {
        plane.speed = { vx:2 };
        plane.engine = 1;
        plane.updateAccelerationAfterDelay(1000);
        
        expect(plane.acceleration).toEqual({ ax:plane.engine + resistance(plane).rx });
    });
});