ground = {
    z: 0
};

plane = {
    engine: 0,
    position: { z:0 },
    speed: { vx:0 },
    acceleration: { ax:0 },
    
    start: function() {
        this.engine = 0;
        this.position = { z:0 };
        this.speed = { vx:0 };
        this.acceleration = { ax:0 };
    },
    increaseThrottle: function() {
        if (this.engine < 2500) {
            this.engine ++;
            updateEngineDrawing(this.document);
        }
    },
    decreaseThrottle: function() {
        if (this.engine > 0) {
            this.engine --;
            updateEngineDrawing(this.document);
        }
    },
    isRenderedIn: function(document) {
        this.document = document
    },
    updateAfterDelay: function(delay) {
        plane.acceleration = { ax:this.engine };
        plane.speed = { vx:delay * plane.acceleration.ax / 1000 + plane.speed.vx };
        updateDasboard(this.document);
    },    
};

pilot = function(event) {
    if (event.keyCode == 84) {
        plane.increaseThrottle();
    }
    if (event.keyCode == 70) {
        plane.decreaseThrottle();
    }
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

updateDasboard = function(document) {
    if (document === undefined) { return; }
    
    var speedElement = document.getElementById('speed');    
    speedElement.innerHTML = plane.speed.vx.toFixed(2);
};