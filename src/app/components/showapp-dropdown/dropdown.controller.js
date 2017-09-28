angular.module('showApp').controller('DropdownController', [
  '$scope', 'ShowAjaxService', 'UrlService', 'ItemMenuService',
  function ($scope, ShowAjaxService, UrlService, ItemMenuService) {
    const self = this;
    self.openDropdown = false;
    self.showCloseDropdown = false;

    self.toggleDropdown = () => {
      self.openDropdown = !self.openDropdown;
    };
    
    self.selectItem = (item) => {
      self.header = item.name;
      self.showCloseDropdown = true;

      UrlService.set($scope.typeDrop, item.id);
      executeAjax();
    };
    
    const resetDropdown = () => {
      self.header = 'Filtrar por..';
      self.showCloseDropdown = false;
    };
    
    self.defaultHeader = () => {
      resetDropdown();
      UrlService.set($scope.typeDrop, null);
      executeAjax();
    };
    
    const executeAjax = () => {
      const query = UrlService.query($scope.queryBy, true);
      const itemMenu = ItemMenuService.get();
      const uri = `${itemMenu.uris.list}?${query}`;
      ShowAjaxService.execute(uri, itemMenu.use_api);
    };

    resetDropdown();
  }]);
