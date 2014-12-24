module.exports = {

    o: undefined,

    willImpact: function(o) {
        o.move = this.move;
        this.o = o;        
    },
    
    travelInTime: function(dt) {
        this.o.move(dt);
    },
    
    move: function(dt) {
        this.position.x = this.position.x + dt * this.speed.vx;
        this.position.y = this.position.y + dt * this.speed.vy;
        this.position.z = this.position.z + dt * this.speed.vz;        
    },
};

