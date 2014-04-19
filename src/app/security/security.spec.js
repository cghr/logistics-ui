describe('security section', function () {
    beforeEach(module('myApp.security'));

    it('should have a dummy test', inject(function() {
        expect(true).toBeTruthy();
    }));
});