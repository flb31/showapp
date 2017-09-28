angular.module('showApp').controller('FilterController', [
  'AjaxService', 'Methods', 'ShowsService', '$location', 'Menu', 'FilterService',
  function (AjaxService, Methods, ShowsService, $location, Menu, FilterService) {
    const self = this;

    self.searchShows = () => {

      let item = getItemMenu();

      if(useApi(item)) {
        const promise = AjaxService.send(Methods.get, `${item.uri}?query=${self.search}`);
        promise.then( (success) => {
          ShowsService.set(success.data);
        });
      } else {
        FilterService.set(self.search);
      }
    };

    const useApi = (obj) => obj.use_api;
    
    const getItemMenu = () => {
      let item = {};
      Menu.forEach( (obj) => {
        if(obj.url == $location.path()) {
          item = obj;
        }
      });
      return item;
    };
  }]);
