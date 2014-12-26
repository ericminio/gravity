ground = {
    z: 0
};

plane = {
    position: { z:0 }
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