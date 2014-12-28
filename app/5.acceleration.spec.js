require('./lib/world');

describe('Acceleration', function() {

    beforeEach(function() {
        plane.start();
    });
    
    it('is zero at the begining', function() {
        expect(plane.acceleration.ax).toEqual(0);
    });
    
    it('comes from the engine', function() {
        plane.engine = 10;
        plane.updateAfterDelay(1000);
        
        expect(plane.acceleration.ax).toEqual(10);
    });
});