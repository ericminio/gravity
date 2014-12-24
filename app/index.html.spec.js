describe('index.html', function() {
   
    it('exists', function() {
        expect(require('fs').existsSync('./app/lib/index.html')).toBe(true);
    });
    
});