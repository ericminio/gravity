require('./lib/world');

describe('The ground', function() {

    it('has an altitude of zero', function() {
        expect(ground.z).toEqual(0);
    });
    
    describe('representation', function() {
        
        it('exists in the page', function() {
            var html = require('fs').readFileSync('./app/lib/index.html').toString();
            var page = require('cheerio').load(html);
        
            expect(page('#ground').length).toEqual(1);
        });

        it('is displayed at 500px from the top', function() {
            var jsdom = require('jsdom').jsdom;
            var document = jsdom('<body><div id="ground"></div></body>');
            var groundElement = document.getElementById('ground');
            displayGround(document);
        
            expect(groundElement.style.top).toEqual('500px');
        });    

        it('is displayed with a height of 5px', function() {
            var jsdom = require('jsdom').jsdom;
            var document = jsdom('<body><div id="ground"></div></body>');
            var groundElement = document.getElementById('ground');
            displayGround(document);
        
            expect(groundElement.style.height).toEqual('5px');
        });    
    });
});