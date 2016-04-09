(function() {
  'use strict';

  angular
    .module('tweetDisplayer')
    .controller('MainController', ['$scope', '$timeout', 'twitterService', MainController]);

  /** @ngInject */
  function MainController($scope, $timeout, twitterService) {
      $scope.tweets = []; //array of tweets
      $scope.myTweets = [];

    twitterService.initialize();

    //using the OAuth authorization result get the latest 20 tweets from twitter for the user
    $scope.refreshTimeline = function(maxId) {
        twitterService.getLatestTweets(maxId).then(function(data) {
            $scope.tweets = $scope.tweets.concat(data);
        }, function() {
            $scope.rateLimitError = true;
        });
        twitterService.getMyTweets(maxId).then(function(data) {
            $scope.myTweets = $scope.myTweets.concat(data);
        }, function() {
            $scope.rateLimitError = true;
        });
    }

    //when the user clicks the connect twitter button, the popup authorization window opens
    $scope.connectButton = function() {
        twitterService.connectTwitter().then(function() {
            if (twitterService.isReady()) {
                //if the authorization is successful, hide the connect button and display the tweets
                $scope.connectedTwitter = true;
                $timeout(function() {
                    $scope.refreshButton = true;
                    $scope.signoutTwitterButton = true;
                    $scope.loadMore = true;
                }, 1000);
                
                $scope.refreshTimeline();
            } else {

            }
        });
    }

    //sign out clears the OAuth cache, the user will have to reauthenticate when returning
    $scope.signOut = function() {
        twitterService.clearCache();
        
        $scope.signoutTwitterButton = false;
        $scope.refreshButton = false;
        $scope.rateLimitError = false;
        $scope.loadMore = false;
        $timeout(function() {
            $scope.tweets = [];
            $scope.myTweets = [];
            $scope.connectedTwitter = false;
        }, 1000);
        
    }

    //if the user is a returning user, hide the sign in button and display the tweets
    if (twitterService.isReady()) {
        $scope.connectedTwitter = true;
        $scope.signoutTwitterButton = true;
        $scope.refreshButton = true;
        $scope.loadMore = true;
        $scope.refreshTimeline();
    }
  }
})();
