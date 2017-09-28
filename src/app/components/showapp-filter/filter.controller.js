angular.module('showApp').controller('FilterController', [
  'ShowAjaxService', 'ItemMenuService', 'UrlService', 'Api',
  function (ShowAjaxService, ItemMenuService, UrlService, Api) {
    const self = this;

    self.searchShows = () => {
      const data = UrlService.get();
      
      if(Object.keys(data).length) {
        const search = getSearch();
        self.search = search;

        if(search) {
          searchByQuery();
        } else {
          searchShowsByFilters();
        }
      } else {
        searchShowsByFilters();
      }
    };
    
    const searchByQuery = () => {
      UrlService.set(Api.params.search, getSearch());
      const vars = UrlService.get();
      
      const itemMenu = ItemMenuService.get();
      const query = UrlService.query([Api.params.search], true);
      const uri = `search/${itemMenu.uris.search}?${query}`;
      
      ShowAjaxService.execute(uri, itemMenu.use_api);
    }
    
    const searchShowsByFilters = () => {
      const itemMenu = ItemMenuService.get();
      const query = UrlService.query([Api.params.year, Api.params.genre], true);
      const uri = `${itemMenu.uris.list}?${query}`;
      
      ShowAjaxService.execute(uri, itemMenu.use_api);
    };
    
    const getSearch = () => (self.search != null ) ? self.search : UrlService.get()[Api.params.search];
    
    // First ajax
    self.searchShows();
  }]);
