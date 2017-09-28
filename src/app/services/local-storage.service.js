angular.module('showApp')
  .service('FavoriteService', ['FavoritesValue', function (FavoritesValue) {

    const list = () => FavoritesValue;

    const get = (id) => {
      let lst = list();
      let item = null;

      lst.forEach( (obj) => {
        if(obj.id == id) {
          item = obj;
        }
      });
      return item;
    };
    
    const remove = (item) => {
      let lst = list();
      const index = lst.indexOf(item);
      lst.splice(index, 1);
    };

    const add = (item) => {
      FavoritesValue.push(item);
    };

    return {
      get: get,
      list: list,
      add: add,
      remove: remove
    };
  }])
  .service('UrlService', ['$location', function ($location) {
    return {
      get: (key) => $location.search(),
      set: (key, val) => {
        $location.search(key, val);
      }
    };
  }]);
