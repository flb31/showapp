angular.module('showApp').controller('HeaderController', [
  'Title', function (Title) {
    const self = this;
    self.title = Title;
  }]
);
