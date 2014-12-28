require('./lib/world');

describe('Weight', function() {

    beforeEach(function() {
        plane.start();
    });
    
    it('is fixed', function() {
        expect(weight(plane)).toEqual(-20);
    });
    
    it('is a composante of the vertical acceleration', function() {
        plane.speed = { vx:0 };
        plane.engine = 0;
        plane.updateAccelerationAfterDelay(1000);
        
        expect(plane.acceleration.az).toEqual(weight(plane));
    });
});