angular.module('showApp').controller('ModalController', [
  '$scope', 'AjaxService', 'Methods', function ($scope, AjaxService, Methods) {
    const self = this;
    self.loading = true;
    self.message = '';
    
    self.closeModal = () => {
      self.reproductor = '';
      $scope.openModal = false;
    };

    $scope.$watch('openModal', (newVal, oldVal) => {
      if(newVal) {
        loadVideo();
      }
    });
    
    const loadVideo = () => {
      const promise = AjaxService.send(Methods.get, `movie/${$scope.show.id}/videos`);
      promise.then( 
        (success) => {
          const results = success.data.results;
          if (results && results.length > 0) {
            const key = results[0].key;
            self.reproductor = `<iframe class="modal-trailer__video" src="https://www.youtube.com/embed/${key}" frameborder="0" allowfullscreen</iframe>`;
          } else {
            self.message = 'Trailer no disponible.';
          }

          self.loading = false;
        },
        (error) => {
          self.message = `Error al cargar video. ${error.status}`;
          self.loading = false;
        });
    };
  }]
);
