angular.module('showApp')
  .directive('showAppFilter', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '../app/components/showapp-filter/filter.html',
      controller: 'FilterController as filterCtrl'
    };
  });
