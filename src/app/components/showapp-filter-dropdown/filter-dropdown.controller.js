angular.module('showApp').controller('FilterDropdownController', [
  function () {
    const self = this;
    self.optionYears = [
      { name: '2017' },
      { name: '2016' },
      { name: '2015' }
    ];
    
    self.optionGenres = [
      { name: 'Drama' },
      { name: 'Terror' },
      { name: 'Acción' }
    ];
  }]
);
