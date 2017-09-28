angular.module('showApp').controller('FilterController', [
  'ShowAjaxService', 'ItemMenuService', 'UrlService', function (ShowAjaxService, ItemMenuService, UrlService) {
    const self = this;

    self.searchShows = () => {
      UrlService.set('query', self.search);
      
      const item = ItemMenuService.get();
      const query = UrlService.query(['query'], true);
      const uri = `search/${item.uris.search}?${query}`;
      
      ShowAjaxService.execute(uri, item.use_api);
    };
    
    ShowAjaxService.execute();
  }]);
