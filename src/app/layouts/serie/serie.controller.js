angular.module('showApp').controller('SerieController', [
  'ShowsService', function (ShowsService) {
    const self = this;
    
    self.getShows = () => {
      self.shows = ShowsService.get();
      return self.shows.results;
    };
  }]
);
