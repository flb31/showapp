(function () {
  'use strict';
  var Web = null;
  Web = {
    module: {}
  };

  Web.module.modal = function (selector) {
    var buttons,
      buttonsModal;
    
    buttons = document.getElementsByClassName(selector);
    Object.keys(buttons).map(function (key) {

      buttons[key].addEventListener('click', function (e) {
        e.preventDefault();
        var modalID = e.target.getAttribute('data-modal');
        document.getElementById(modalID).className += ' modal__show';
      });
    });

    buttonsModal = document.getElementsByClassName('js-modal-close');
    Object.keys(buttonsModal).map(function (key) {
      buttonsModal[key].addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('modal').classList.remove('modal__show');
      });
    });
  };

  Web.module.buttonMobile = function (selector, selector_menu) {
    document.getElementById(selector).addEventListener('click', function () {
      this.classList.toggle('hamburger-button__open');
      document.getElementById(selector_menu).classList.toggle('menu__open');
    });
  };

  Web.module.modal('js-modal');
  Web.module.buttonMobile('js-hamburger', 'js-menu');
}());
