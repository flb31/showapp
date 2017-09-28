angular.module('showApp').controller('FilterController', [
  'AjaxService', 'Methods', 'ShowsService', function (AjaxService, Methods, ShowsService) {
    const self = this;
    
    self.searchShows = () => {
      const promise = AjaxService.send(Methods.get, `search/movie?query=${self.search}`);
      promise.then( (success) => {
        ShowsService.set(success.data);
        console.log(success.data);
      });
    };
  }]
);
