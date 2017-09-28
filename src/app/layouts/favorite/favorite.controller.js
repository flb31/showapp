angular.module('showApp').controller('FavoriteController', [
  'FavoritesValue', function (FavoritesValue) {
    const self = this;
    self.getShows = () => FavoritesValue;
  }]
);
