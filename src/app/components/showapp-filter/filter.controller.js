angular.module('showApp').controller('FilterController', [
  'AjaxService', 'Methods', 'ShowsService', '$location', 'Menu',
  function (AjaxService, Methods, ShowsService, $location, Menu) {
    const self = this;
    
    self.searchShows = () => {
      
      let item = getItemMenu();
      
      if(useApi(item)) {
        const promise = AjaxService.send(Methods.get, `${item.uri}?query=${self.search}`);
        promise.then( (success) => {
          ShowsService.set(success.data);
          console.log(success.data);
        });
      } else {
        console.log('usa otro metodo');
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
