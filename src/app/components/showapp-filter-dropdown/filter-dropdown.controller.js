angular.module('showApp').controller('FilterDropdownController', [
  'AjaxService', 'Methods', 'Config', function (AjaxService, Methods, Config) {
    const self = this;
    self.optionGenres = [];
    self.optionYears = [];
    self.year = 'primary_release_year';
    self.genre = 'with_genres';
    self.queryBy = [self.genre, self.year];
    const currentYear = new Date().getFullYear();
    
    const loadData = () => {
      const promise = AjaxService.send(Methods.get, `genre/movie/list`);
      promise.then( (response) => {
        self.optionGenres = response.data.genres;
      });
      
      self.optionYears = loadYears();
    };
    
    const loadYears = () => {
      const since = Config.since;
      let years = [];
      for (var i = currentYear; i >= since; i --) {
        years.push( { name: i, id: i });
      }
      return years;
    }
    
    loadData();
  }]
);
