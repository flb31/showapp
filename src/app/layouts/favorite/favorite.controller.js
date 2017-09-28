angular.module('showApp').controller('FavoriteController', [
  'FavoritesValue', 'UrlService', 'Api',  function (FavoritesValue, UrlService, Api) {
    const self = this;
    self.getShows = () => FavoritesValue;
    self.getFilter = () => UrlService.get()[Api.params.search];
  }]
);
