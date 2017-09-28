angular.module('showApp').controller('ShowCardController', [
  '$scope', 'Config', 'Api', 'AjaxService', 'Methods', 'FavoriteService',
  function ($scope, Config, Api, AjaxService, Methods, FavoriteService) {
    const self = this;
    self.show = $scope.item;
    self.limit = Config.limit_text;

    const url_image = Api.url_image;
    const url_image_default = Api.url_image_default;

    self.setImage = (path_url) => (path_url) ? url_image + path_url : url_image_default;

    self.setTitle = (item) => {
      if(item.title) {
        return item.title;
      } else if(item.original_title) {
        return item.original_title;
      } else if(item.name) {
        return item.name;
      } else {
        return Config.title_default;
      }
    };

    self.addedFav = (item) => {
      let fav = FavoriteService.get(item.id);
      return fav != null;
    };

    self.addFavorite = (item) => {
      if (!self.addedFav(item)) {
        FavoriteService.add(item);
      } else {
        FavoriteService.remove(item);
      }
    };
  }]
);
