angular.module('showApp')
  .directive('showAppFilterDropdown', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '../app/components/showapp-filter-dropdown/filter-dropdown.html',
      controller: 'FilterDropdownController as filterDropCtrl'
    };
  });
