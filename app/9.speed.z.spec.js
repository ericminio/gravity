require('./lib/world');

describe('Speed Z', function() {

    beforeEach(function() {
        plane.start();
    });
    
    it('is zero at the begining', function() {
        expect(plane.speed.vz).toEqual(0);
    });
    
    it('increases with time % acceleration z', function() {
        plane.engine = 0;
        plane.acceleration.az = 2;
        plane.updateSpeedAfterDelay(1000);
        plane.updateSpeedAfterDelay(1000);
        
        expect(plane.speed.vz).toEqual(4);
    });
    
    it('can not be negative when the plane is on the ground', function() {
        plane.position.z = 0;
        plane.acceleration.az = -10;
        plane.updateSpeedAfterDelay(1000);

        expect(plane.speed.vz).toEqual(0);
    });
});