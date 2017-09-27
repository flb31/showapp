angular.module('showApp').controller('DropdownController', [
  '$scope', function ($scope) {
    const self = this;
    self.openDropdown = false;
    self.showCloseDropdown = false;
    self.options = $scope.options;
    
    self.toggleDropdown = () => {
      self.openDropdown = !self.openDropdown;
    };
    
    self.selectItem = (item) => {
      self.header = item.name;
      self.showCloseDropdown = true;
    };
    
    self.defaultHeader = () => {
      self.header = 'Filtrar por..';
      self.showCloseDropdown = false;
    };

    self.defaultHeader();
  }]);
