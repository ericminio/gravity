ground = {
    z: 0
};

tree = {
    x: 450
};

plane = {
    
    start: function() {
        this.engine = 0;
        this.position = { x:0, z:0 };
        this.speed = { vx:0, vz:0 };
        this.acceleration = { ax:0 };
    },
    increaseThrottle: function() {
        if (this.engine < 2500) {
            this.engine += 1;
        }
    },
    decreaseThrottle: function() {
        if (this.engine > 0) {
            this.engine -= 1;
        }
    },
    updateAfterDelay: function(delay) {
        this.updateAccelerationAfterDelay(delay);
        this.updateSpeedAfterDelay(delay);
        this.updatePositionAfterDelay(delay);
    }, 
    updateAccelerationAfterDelay: function(delay) {
        this.acceleration = { 
            ax: traction(this).tx + resistance(this).rx,
            az: lift(this).lz + weight(this)
        };
    },
    updateSpeedAfterDelay: function(delay) {
        this.speed = { 
            vx: delay * this.acceleration.ax / 1000 + this.speed.vx,
            vz: delay * this.acceleration.az / 1000 + this.speed.vz,
        };
        if (this.speed.vz < 0 && this.position.z == 0) { this.speed.vz = 0; }
    },
    updatePositionAfterDelay: function(delay) {
        this.position = {
            z: delay * this.speed.vz / 1000 + this.position.z,
            x: delay * this.speed.vx / 1000 + this.position.x,
        };
        if (this.position.z <0) { this.position.z = 0; }
        if (this.position.x <0) { this.position.x = 0; }
    },
};

traction = function(plane) {
    return { tx: plane.engine };
};

resistance = function(plane) {
    return { rx: - plane.speed.vx * plane.speed.vx / 10 };
};

lift = function(plane) {
    return { lz: plane.speed.vx * plane.speed.vx / 10 };
};

weight = function(plane) {
    return -20;
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
    displayPlane(document, plane);
    displayTree(document, plane);
};

displayGround = function(document) {
    var groundElement = document.getElementById('ground');
    
    groundElement.style.top = '500px';
    groundElement.style.height = '5px';
};

displayTree = function(document, plane) {
    if (document === undefined) { return; }
    
    var groundElement = document.getElementById('ground');
    var treeElement = document.getElementById('tree');
    var groundElementTop = groundElement.style.top.substring(0, groundElement.style.top.indexOf('px'));
    
    treeElement.style.top = groundElementTop - treeElement.height + 'px';
    treeElement.style.left = 2*(tree.x - plane.position.x) + 'px';
};

displayPlane = function(document, plane) {
    if (document === undefined) { return; }
    
    var groundElement = document.getElementById('ground');
    var planeElement = document.getElementById('plane');
    var groundElementTop = groundElement.style.top.substring(0, groundElement.style.top.indexOf('px'));
    
    planeElement.style.top = groundElementTop - 2*plane.position.z - planeElement.height + 'px';
};

displayDashboard = function(document) {
    var dashboardElement = document.getElementById('dashboard');
    var groundElement = document.getElementById('ground');
    var groundElementTop = groundElement.style.top.substring(0, groundElement.style.top.indexOf('px'));
    var groundElementHeight = groundElement.style.height.substring(0, groundElement.style.height.indexOf('px'));
    var value = 1 + parseInt(groundElementTop) + parseInt(groundElementHeight) + 'px';
    
    dashboardElement.style.top = value;
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