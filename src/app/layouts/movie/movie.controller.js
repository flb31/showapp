angular.module('showApp').controller('MovieController', [
  'ShowsService', function (ShowsService) {
    const self = this;
    
    self.getShows = () => {
      self.shows = ShowsService.get();
      return self.shows.results;
    };
  }]
);
