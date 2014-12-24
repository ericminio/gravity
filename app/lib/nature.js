var nature = {

    g: 10,

    o: undefined,

    willImpact: function(o) {
        o.move = this.move;
        this.o = o;        
    },
    
    travelInTime: function(dt) {
        this.o.move(dt);
    },
    
    move: function(dt) {
        this.acceleration.ax = 0;
        this.acceleration.ay = 0;
        this.acceleration.az = -nature.g;
        
        this.speed.vx = this.speed.vx + dt * this.acceleration.ax;
        this.speed.vy = this.speed.vy + dt * this.acceleration.ay;
        this.speed.vz = this.speed.vz + dt * this.acceleration.az;
        
        this.position.x = this.position.x + dt * this.speed.vx;
        this.position.y = this.position.y + dt * this.speed.vy;
        this.position.z = this.position.z + dt * this.speed.vz;        
    },
};

module.exports = nature;