angular.module('showApp').controller('FilterController', [
  'AjaxService', 'Methods', 'ShowsService', '$location', 'Menu', 'UrlService',
  function (AjaxService, Methods, ShowsService, $location, Menu, UrlService) {
    const self = this;

    self.searchShows = () => {

      let item = getItemMenu();
      
      UrlService.set('search', self.search);

      if(useApi(item)) {
        const search = (self.search != null ) ? self.search : item.searchDefault;
        self.search = search;
        
        const promise = AjaxService.send(Methods.get, `${item.uri}?query=${self.search}`);
        promise.then( (success) => {
          ShowsService.set(success.data);
        });
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
    
    self.searchShows();
  }]);
