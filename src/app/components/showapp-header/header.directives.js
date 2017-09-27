angular.module('showApp')
  .directive('showAppHeader', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '../app/components/showapp-header/header.html',
      controller: 'HeaderController as headerCtrl'
    };
  });
