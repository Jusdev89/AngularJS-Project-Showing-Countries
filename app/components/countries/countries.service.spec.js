(function() {
  'use strict';

  describe('service countries', function() {
    var countries;
    var $httpBackend;
    var $log;

    beforeEach(module('eventsApi'));
    beforeEach(inject(function(_countries_, _$httpBackend_, _$log_) {
      countries = _countries_;
      $httpBackend = _$httpBackend_;
      $log = _$log_;
    }));

    it('should be registered', function() {
      expect(countries).not.toEqual(null);
    });

    describe('apiHost variable', function() {
      it('should exist', function() {
        expect(countries.apiHost).not.toEqual(null);
      });
    });

    describe('getCountries function', function() {
      it('should exist', function() {
        expect(countries.getCountries).not.toEqual(null);
      });

      it('should return data', function() {
        $httpBackend.when('GET',  countries.apiHost).respond(200, [{pprt: 'value'}]);
        var data;
        countries.getCountries().then(function(fetchedData) {
          data = fetchedData;
        });
        $httpBackend.flush();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
      });

      it('should define a limit per page as default value', function() {
        $httpBackend.when('GET',  countries.apiHost).respond(200, new Array(30));
        var data;
        countries.getCountries().then(function(fetchedData) {
          data = fetchedData;
        });
        $httpBackend.flush();
        expect(data).toEqual(jasmine.any(Array));
      });

      it('should log a error', function() {
        $httpBackend.when('GET',  countries.apiHost).respond(500);
        countries.getCountries();
        $httpBackend.flush();
        expect($log.error.logs).toEqual(jasmine.stringMatching('XHR Failed for'));
      });
    });
  });
})();
