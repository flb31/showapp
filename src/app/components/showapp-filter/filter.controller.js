angular.module('showApp').controller('FilterController', [
  'ShowAjaxService', 'ItemMenuService', 'UrlService', 'Api', '$scope', 'AttributesService', '$timeout',
  function (ShowAjaxService, ItemMenuService, UrlService, Api, $scope, AttributesService, $timeout) {
    const self = this;
    self.timeOut = null;

    self.searchShows = () => {
      const data = UrlService.get();
      AttributesService.set(UrlService.query( [Api.params.year, Api.params.genre, Api.params.search], true ));
      
      if(Object.keys(data).length) {
        const search = getSearch();

        if(search) {
          searchByQuery();
        } else {
          searchShowsByFilters();
        }
      } else {
        searchShowsByFilters();
      }
    };
    
    self.changeText = () => {
      $timeout.cancel(self.timeOut);
      self.timeOut = $timeout(() => {
        UrlService.set(Api.params.search, getSearch());
      }, 500);
    };
    
    const searchByQuery = () => {
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
    
    $scope.$on('$routeChangeStart', function(next, current) {
       self.searchShows();
    });
    
    // First ajax
    self.searchShows();
  }]);
