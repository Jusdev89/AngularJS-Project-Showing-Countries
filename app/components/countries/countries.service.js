(function() {
  'use strict';

  angular
    .module('eventsApi')
    .factory('countries', countryNames);

  /** @ngInject */
  function countryNames($log, $http) {
    var apiHost = 'https://restcountries.eu/rest/v1/all';

    var service = {
      apiHost: apiHost,
      getCountries: getCountries
    };

    return service;

    function getCountries() {

      return $http.get(apiHost)
        .then(getCountriesComplete)
        .catch(getCountriesFailed);

      function getCountriesComplete(response) {
        return response.data;
      }

      function getCountriesFailed(error) {
        $log.error('XHR Failed for getCountries.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
