angular.module('showApp')
  .service('AjaxService', ['Api', '$http', 'Config', function (Api, $http, Config) {
    
    const findChar = (str, search) => (str.indexOf(search) != -1);
    
    return {
      send: (method, uri) => {
        const data = (arguments[2]) ? arguments[2] : null;
        const char = (findChar(uri, '?') ) ? '&' : '?';
        const key  = `${char}api_key=${Api.key}`;
        const language = `&language=${Config.language}`;

        return $http({ method: method, timeout: 5000,  url: Api.url + uri + key + language, data: data });
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
