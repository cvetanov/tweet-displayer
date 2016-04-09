(function() {
  'use strict';

  angular
    .module('tweetDisplayer')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
