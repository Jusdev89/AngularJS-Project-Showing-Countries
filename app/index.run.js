(function() {
  'use strict';

  angular
    .module('eventsApi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
