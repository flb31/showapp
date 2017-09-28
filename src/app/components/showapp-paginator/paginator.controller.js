angular.module('showApp').controller('PaginatorController', [
  'Config', function (Config) {
    const self = this;
    self.currentPage = 0;
    self.limit = Config.limit_show;
  }]
);
