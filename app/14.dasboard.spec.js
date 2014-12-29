require('./lib/world');

describe('Dasboard', function() {

    describe('representation', function() {
        
        it('exists in the page', function() {
            var html = require('fs').readFileSync('./app/lib/index.html').toString();
            var page = require('cheerio').load(html);
        
            expect(page('#dashboard').length).toEqual(1);
        });

        it('is displayed below the ground', function() {
            var jsdom = require('jsdom').jsdom;
            var document = jsdom('<body><div id="ground"></div><div id="dashboard"></div></body>');
            var groundElement = document.getElementById('ground');
            groundElement.style.top = '300px';
            groundElement.style.height = '6px';
            displayDashboard(document);
        
            expect(document.getElementById('dashboard').style.top).toEqual('307px');
        });    
    });
});