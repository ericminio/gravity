var nature = require('./lib/nature');

describe('Movement', function() {

    it('comes from speed and time', function() {
        var plane = {
            position: { x:0, y: 0, z:0 },
            speed: { vx:1, vy: 2, vz: 3 }
        };
        nature.willImpact(plane);
        nature.travelInTime(2);
        
        expect(plane.position).toEqual({ x:2, y: 4, z:6 });
    });
});