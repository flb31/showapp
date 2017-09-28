angular.module('showApp').controller('FavoriteController', [
  'FavoritesValue', 'FilterService', function (FavoritesValue, FilterService) {
    const self = this;
    self.getShows = () => FavoritesValue;
    self.getFilter = () => FilterService.get();
  }]
);
