require('./lib/world');

describe('Lift', function() {

    beforeEach(function() {
        plane.start();
    });
    
    it('comes from speed', function() {
        plane.speed = { vx:2 };
        
        expect(lift(plane)).toEqual({ lz:0.4 });
    });
    
    it('is a composante of the vertical acceleration', function() {
        plane.speed = { vx:2 };
        plane.engine = 0;
        plane.updateAccelerationAfterDelay(1000);
        
        expect(plane.acceleration.az).toEqual(lift(plane).lz + weight(plane));
    });
});