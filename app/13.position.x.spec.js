require('./lib/world');

describe('Position X', function() {

    beforeEach(function() {
        plane.start();
    });
    
    it('is zero at the begining', function() {
        expect(plane.position.x).toEqual(0);
    });
    
    it('increases with time % speed x', function() {
        plane.speed.vx = 10;
        plane.updatePositionAfterDelay(1000);
        plane.updatePositionAfterDelay(1000);
        
        expect(plane.position.x).toEqual(20);
    });
    
    it('can not be below zero', function() {
        plane.speed.vx = -10;
        plane.updatePositionAfterDelay(1000);
        
        expect(plane.position.x).toEqual(0);
    });
});