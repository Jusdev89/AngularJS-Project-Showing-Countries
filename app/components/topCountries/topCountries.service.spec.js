(function() {
  'use strict';

  describe('service topCountries', function() {
    var topCountries;

    beforeEach(module('eventsApi'));
    beforeEach(inject(function(_topCountries_) {
      topCountries = _topCountries_;
    }));

    it('should be registered', function() {
      expect(topCountries).not.toEqual(null);
    });

    describe('getCountries function', function() {
      it('should exist', function() {
        expect(topCountries.getCountries).not.toEqual(null);
      });

      it('should return array of object', function() {
        var data = topCountries.getCountries();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 5).toBeTruthy();
      });
    });
  });
})();
