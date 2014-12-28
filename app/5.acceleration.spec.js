require('./lib/world');

describe('Acceleration', function() {

    beforeEach(function() {
        plane.start();
        plane.document = undefined;
    });
    
    it('is zero at the begining', function() {
        expect(plane.acceleration.ax).toEqual(0);
    });
    
    it('comes from the engine', function() {
        plane.engine = 10;
        plane.updateAfterDelay(1000);
        
        expect(plane.acceleration.ax).toEqual(10);
    });
    
    it('remains the same when engine is steady', function() {
        plane.engine = 10;
        plane.updateAfterDelay(1000);
        plane.updateAfterDelay(1000);
        
        expect(plane.acceleration.ax).toEqual(10);
    });
});