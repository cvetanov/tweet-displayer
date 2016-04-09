(function() {
  'use strict';

  angular
    .module('tweetDisplayer')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/main/views/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })

    $urlRouterProvider.otherwise('/');
  }

})();
