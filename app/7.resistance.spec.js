require('./lib/world');

describe('Resistance', function() {

    beforeEach(function() {
        plane.start();
    });
    
    it('comes from speed', function() {
        plane.speed = { vx:2 };
        
        expect(resistance(plane).rx).toEqual( -0.4 );
    });
    
    it('is added to engine traction', function() {
        plane.speed = { vx:2 };
        plane.engine = 1;
        plane.updateAccelerationAfterDelay(1000);
        
        expect(plane.acceleration.ax).toEqual(traction(plane).tx + resistance(plane).rx );
    });
});