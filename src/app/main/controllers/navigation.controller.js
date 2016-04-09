(function() {
  'use strict';

  angular
    .module('tweetDisplayer')
    .controller('NavigationController', ['$scope', '$location', NavigationController]);

  /** @ngInject */
  function NavigationController($scope, $location) {
      $scope.isActive = function (url) {
        return url === $location.path();
      };
  }
})();
