var Web = null;
Web = { 
  module: {} 
};

Web.module.modal = function(selector) {
  var buttons = document.getElementsByClassName(selector);
  Object.keys(buttons).map(function(key) {
    
    buttons[key].addEventListener('click', function(e) {
      e.preventDefault();
      var modalID = e.target.getAttribute('data-modal');
      document.getElementById(modalID).className += ' modal__show';
    });
  });
  
  var buttons = document.getElementsByClassName('js-modal-close');
  Object.keys(buttons).map(function(key) {
    buttons[key].addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('modal').classList.remove('modal__show');
    });
  });
  
};

Web.module.modal('js-modal');
