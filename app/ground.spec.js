require('./lib/world');

describe('Ground', function() {

    it('has an altitude of zero', function() {
        expect(ground.z).toEqual(0);
    });
    
    it('is displayed at 500px from the top', function() {
        var jsdom = require('jsdom').jsdom;
        var document = jsdom('<body><div id="ground"></div></body>');
        displayGround(document);
        var groundElement = document.getElementById('ground');
        
        expect(groundElement.style.top).toEqual('500px');
    });
});