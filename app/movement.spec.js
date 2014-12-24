var nature = require('./lib/nature');

describe('Movement', function() {

    it('is created by gravity', function() {
        var ball = {
            position: { x:0, y: 0, z:100 },
            speed: { vx:0, vy: 0, vz: 0 },
            acceleration: { ax:0, ay:0, az:0 }
        };
        nature.willImpact(ball);
        nature.travelInTime(1);

        expect(ball.acceleration).toEqual({ ax:0, ay:0, az:-nature.g });
        expect(ball.speed).toEqual({ vx:0, vy:0, vz:-nature.g })
        expect(ball.position).toEqual({ x:0, y:0, z:(100-nature.g) });
    });

    it('comes from speed and time', function() {
        var plane = {
            position: { x:0, y:0, z:100 },
            speed: { vx:1, vy:2, vz:3 },
            acceleration: { ax:0, ay:0, az:0 }
        };
        nature.willImpact(plane);
        nature.travelInTime(1);
        
        expect(plane.speed).toEqual({ vx:1, vy:2, vz:3-nature.g })
        expect(plane.position).toEqual({ x:1, y:2, z:100+3-nature.g });
        nature.travelInTime(1);
        
        expect(plane.speed).toEqual({ vx:1, vy:2, vz:3-nature.g-nature.g });
        expect(plane.position).toEqual({ x:2, y:4, z:100+3-nature.g+3-nature.g-nature.g });
    });    
});