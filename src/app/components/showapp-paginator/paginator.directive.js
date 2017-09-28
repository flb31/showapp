angular.module('showApp')
  .directive('showAppPaginator', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '../app/components/showapp-paginator/paginator.html',
      controller: 'PaginatorController as paginatorCtrl'
    };
  });
