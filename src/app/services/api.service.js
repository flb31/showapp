angular.module('showApp')
  .service('AjaxService', ['Api', '$http', function (Api, $http) {
    return {
      send: (method, uri) => {
        const data = (arguments[2]) ? arguments[2] : null;
        const key  = `&api_key=${Api.key}`;

        return $http({ method: method, timeout: 5000,  url: Api.url + uri + key, data: data });
      }
    };
  }])
  .service('ShowsService', ['ShowValue', function (ShowValue) {
    return {
      get: () => ShowValue,
      set: (newsShows) => {
        ShowValue = newsShows;
      }
    };
  }]);
