require('./lib/world');

describe('Tic-tac:', function() {

    beforeEach(function() {
        plane.start();
    });
    
    afterEach(function() {
        
    });
    
    describe('acceleration on x', function() {
        
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
    
    describe('speed on x', function() {
       
        it('comes from ax', function() {
            plane.engine = 10;
            plane.updateAfterDelay(1000);
            
            expect(plane.speed.vx).toEqual(10);
        });
        
        it('increases with time when engine is steady', function() {
            plane.engine = 10;
            plane.updateAfterDelay(1000);
            plane.updateAfterDelay(1000);
            
            expect(plane.speed.vx).toEqual(20);
        });
    });
});