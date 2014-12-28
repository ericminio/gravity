require('./lib/world');

describe('Altitude', function() {

    beforeEach(function() {
        plane.start();
    });
    
    it('is zero at the begining', function() {
        expect(plane.position.z).toEqual(0);
    });
    
    it('increases with time % speed z', function() {
        plane.speed.vz = 10;
        plane.updatePositionAfterDelay(1000);
        plane.updatePositionAfterDelay(1000);
        
        expect(plane.position.z).toEqual(20);
    });
});