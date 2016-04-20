(function() {
  'use strict';

  angular
    .module('eventsApi')
    .directive('acmeMalarkey', acmeMalarkey);

  /** @ngInject */
  function acmeMalarkey(malarkey) {
    var directive = {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: MalarkeyController,
      controllerAs: 'vm'
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      var watcher;
      var typist = malarkey(el[0], {
        typeSpeed: 40,
        deleteSpeed: 40,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });

      el.addClass('acme-malarkey');

      angular.forEach(scope.extraValues, function(value) {
        typist.type(value).pause().delete();
      });

      watcher = scope.$watch('vm.countries', function() {

        var countries = vm.countries.sort(Math.random());

        angular.forEach(countries, function(country) {
          typist.type(country.name).pause().delete();
        });
      });

      scope.$on('$destroy', function () {
        watcher();
      });
    }

    /** @ngInject */
    function MalarkeyController($log, countries) {
      var vm = this;

      vm.countries = [];

      activate();

      function activate() {
        return getCountries().then(function() {
          $log.info('Activated Countries View');
        });
      }

      function getCountries() {
        return countries.getCountries().then(function(data) {
          vm.countries = data;

          return vm.countries;
        });
      }
    }

  }

})();
