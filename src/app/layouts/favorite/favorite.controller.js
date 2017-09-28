angular.module('showApp').controller('FavoriteController', [
  'FavoritesValue', 'UrlService', function (FavoritesValue, UrlService) {
    const self = this;
    self.getShows = () => FavoritesValue;
    self.getFilter = () => UrlService.get('search').search;
  }]
);
