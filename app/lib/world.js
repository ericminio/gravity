ground = {
    z: 0
};

plane = {
    
    start: function() {
        this.engine = 0;
        this.position = { z:0 };
        this.speed = { vx:0 };
        this.acceleration = { ax:0 };
    },
    increaseThrottle: function() {
        if (this.engine < 2500) {
            this.engine ++;
        }
    },
    decreaseThrottle: function() {
        if (this.engine > 0) {
            this.engine --;
        }
    },
    updateAfterDelay: function(delay) {
        this.updateAccelerationAfterDelay(delay);
        this.updateSpeedAfterDelay(delay);
    }, 
    updateAccelerationAfterDelay: function(delay) {
        this.acceleration = { ax:this.engine + resistance(this).rx };
    },
    updateSpeedAfterDelay: function(delay) {
        this.speed = { vx:delay * this.acceleration.ax / 1000 + this.speed.vx };
    },
};

resistance = function(plane) {
    return { rx: - plane.speed.vx * plane.speed.vx / 10 };
};

pilot = function(event, document) {
    if (event.keyCode == 84) {
        plane.increaseThrottle();
        update(document, plane);
    }
    if (event.keyCode == 70) {
        plane.decreaseThrottle();
        update(document, plane);
    }
};

update = function(document, plane) {
    updateEngineDrawing(document, plane);
    updateSpeedDrawing(document, plane);
};

displayGround = function(document) {
    var groundElement = document.getElementById('ground');
    
    groundElement.style.top = '500px';
};

displayPlane = function(document) {
    var groundElement = document.getElementById('ground');
    var planeElement = document.getElementById('plane');
    var groundElementTop = groundElement.style.top.substring(0, groundElement.style.top.indexOf('px'));
    
    planeElement.style.top = groundElementTop - 2*plane.position.z - planeElement.height + 'px';
};

updateEngineDrawing = function(document) {
    if (document === undefined) { return; }
    
    var engineElement = document.getElementById('engine');    
    engineElement.innerHTML = plane.engine;
};

updateSpeedDrawing = function(document, plane) {
    if (document === undefined) { return; }
    
    var speedElement = document.getElementById('speed');    
    speedElement.innerHTML = plane.speed.vx.toFixed(2);
};