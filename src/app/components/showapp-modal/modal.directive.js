angular.module('showApp')
  .directive('showAppModal', function () {
    return {
      restrict: 'E',
      scope: {
        show: '=',
        openModal: '='
      },
      templateUrl: '../app/components/showapp-modal/modal.html',
      controller: 'ModalController as modalCtrl'
    };
  });
