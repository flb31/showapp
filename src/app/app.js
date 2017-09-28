var dependencies = [
  'ngRoute'
];

angular.module('showApp', dependencies)
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/movies', {
        templateUrl: '../app/layouts/movie/movie.html',
        controller: 'MovieController as movieCtrl'
      })
      .when('/series', {
        templateUrl: '../app/layouts/serie/serie.html',
        controller: 'SerieController as serieCtrl'
      })
      .when('/favorites', {
        templateUrl: '../app/layouts/favorite/favorite.html',
        controller: 'FavoriteController as favoriteCtrl'
      })
      .otherwise({
        redirectTo: '/movies'
      });
  });