var fs = require('fs');
var cheerio = require('cheerio');

describe('index.html', function() {
   
    var file = './app/lib/index.html';
   
    it('exists', function() {
        expect(fs.existsSync(file)).toBe(true);
    });
    
    describe('content', function() {
    
        var page;
    
        beforeEach(function() {
            var html = fs.readFileSync(file).toString();
            page = cheerio.load(html);
        });
    
        it('contains the plane image', function() {
            expect(page('#plane').attr('src')).toEqual('/lib/plane.png'); 
        });
        
        it('contains the engine value placeholder', function() {
            expect(page('#engine').length).toEqual(1);
            expect(page('#engine').text()).toEqual('0');
        });
    });
});