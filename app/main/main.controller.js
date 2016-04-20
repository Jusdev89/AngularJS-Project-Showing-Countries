(function() {
  'use strict';

  angular
    .module('eventsApi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, topCountries, toastr, countries) {
    var vm = this;

    vm.awesomeThings = [];
    vm.allCountries = [];
    vm.classAnimation = '';
    vm.creationDate = 1460894588824;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getCountries();
      getAllCountries();

      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getAllCountries() {
      return countries.getCountries().then(function(data) {
        vm.allCountries = data;

        return vm.allCountries;
      });
    }

    function getCountries() {
      vm.awesomeThings = topCountries.getCountries();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
