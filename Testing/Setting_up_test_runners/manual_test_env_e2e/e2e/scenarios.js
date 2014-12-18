describe('Search Results', function() {
	beforeEach(function() {
		browser().navigateTo('/index.html');
		pause();
	});
	it('should filter results', function() {
		element('#searchBox').query(function (e, done) {
            e.val('M');
            e.trigger("input");
            done();
        }); 
		expect(repeater('li').count()).toEqual(3);
	});
});