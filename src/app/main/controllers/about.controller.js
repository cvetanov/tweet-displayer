(function() {
  'use strict';

  angular
    .module('tweetDisplayer')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($scope) {
    $scope.info = 'Application for trying out yeoman gulp-angular generator';
    $scope.bonus = 'Simple Twitter API integration following this tutorial   ';
  }
})();
