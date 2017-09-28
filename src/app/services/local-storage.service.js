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
    const get = () => $location.search();
    
    const set = (key, val) => {
      $location.search(key, val);
    };
    
    const validateAttr = (attr) => (attr);
    
    const query = (keys, removeStart) => {
      let queryStr = '';
      keys.forEach( (key) => {
        let val = get()[key];
        if(validateAttr(val)) {
          queryStr += `&${key}=${val}`;
        }
      });
      
      if(removeStart) {
        queryStr = queryStr.substr(1);
      }
      
      return queryStr;
    };
    
    return {
      get: get,
      set: set,
      query: query
    };
  }])
  .service('ItemMenuService', ['$location', 'Menu', function ($location, Menu) {
    return {
      get: () => {
        let item = {};
        Menu.forEach( (obj) => {
          if(obj.url == $location.path()) {
            item = obj;
          }
        });
        return item;
      }
    };
  }])
  .service('ShowAjaxService', ['ShowsService', 'UrlService', 'Methods', 'AjaxService', 'ItemMenuService',
  function (ShowsService, UrlService, Methods, AjaxService, ItemMenuService) {
    
    return {
      execute: (uri, use_api) => {
        if(use_api) {
          const promise = AjaxService.send(Methods.get, uri);
          promise.then( (success) => {
            ShowsService.set(success.data);
          });
        } else {
          ShowsService.set([]);
        }
      }
    };
  }])
  .service('AttributesService', ['AttributesValue', function(AttributesValue) {
    return {
      set: (newAttr) => {
        AttributesValue = newAttr;
      },
      get: () => {
        return AttributesValue;
      }
    }
  }])
  .service('GenreService', ['GenresValue', function(GenresValue) {
    return {
      set: (newGenres) => {
        GenresValue = newGenres;
      },
      get: () => {
        return GenresValue;
      }
    }
  }]);
