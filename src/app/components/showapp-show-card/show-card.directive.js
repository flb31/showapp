angular.module('showApp')
  .directive('showAppShowCard', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '../app/components/showapp-show-card/show-card.html',
      controller: 'ShowCardController as showCardCtrl'
    };
  });
