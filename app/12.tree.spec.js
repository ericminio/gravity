require('./lib/world');

describe('The tree', function() {

    it('is far enough to not disturb take-off', function() {
        expect(tree.x).toEqual(450);
    });
    
    describe('representation', function() {
        
        it('exists in the page', function() {
            var html = require('fs').readFileSync('./app/lib/index.html').toString();
            var page = require('cheerio').load(html);
        
            expect(page('#tree').length).toEqual(1);
        });

        var document;
        var treeDrawing;
        
        beforeEach(function() {
            document = require('jsdom').jsdom(
                '<body><img id="tree"/><div id="ground"></div></body>'
            );
            document.getElementById('ground').style.top = '300px';
            treeDrawing = document.getElementById('tree');
            treeDrawing.height = 40;
        });

        it('is displayed on the ground', function() {
            displayTree(document, plane);
        
            expect(treeDrawing.style.top).toEqual('260px');
        });
        
        it('is displayed after the runway', function() {
            plane.position.x = 0;
            displayTree(document, plane);
        
            expect(treeDrawing.style.left).toEqual('900px');
        });

        it('seems to move when the plane moves', function() {
            plane.position.x = tree.x / 2;
            displayTree(document, plane);
        
            expect(treeDrawing.style.left).toEqual('450px');
        });
    });
});