var dependencies = [
  'ngRoute'
];

angular.module('showApp', dependencies)
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: '../app/layouts/movie/movie.html',
        controller: 'MovieController as movieCtrl'
      })
      .when('/movies', {
        templateUrl: '../app/layouts/movie/movie.html',
        controller: 'MovieController as movieCtrl'
      })
      .when('/series', {
        templateUrl: '../app/layouts/serie/serie.html'
      })
      .when('/favorites', {
        templateUrl: '../app/layouts/favorite/favorite.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });