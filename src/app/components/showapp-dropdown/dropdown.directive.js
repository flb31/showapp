angular.module('showApp')
  .directive('showAppDropdown', function () {
    return {
      restrict: 'E',
      scope: {
        options: '='
      },
      templateUrl: '../app/components/showapp-dropdown/dropdown.html',
      controller: 'DropdownController as dropdownCtrl'
    };
  });
