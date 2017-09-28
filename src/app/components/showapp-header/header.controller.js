angular.module('showApp').controller('HeaderController', [
  'Config', '$location', function (Config, $location) {
    const self = this;
    self.title = Config.title;
    self.menu = [
      { name: 'Movies', url:'/movies', class: '' },
      { name: 'Series', url:'/series', class: '' },
      { name: 'Favoritos', url:'/favorites', class: '' }
    ];
    self.isOpen = false;
    const menuActive = 'menu__item-active';

    const verifyMenuByUrl = () => {
      const url = $location.url();
      self.menu.forEach( (el) => {
        if(url == el.url) {
          el.class = menuActive;
        }
      });
    };

    self.activeMenuItem = (index) => {
      self.menu.forEach( (el) => {
        el.class = '';
      });
      self.menu[index].class = menuActive;
    };
    
    self.toggleMenu = () => {
      self.isOpen = !self.isOpen;
    };

    self.closeMenu = () => {
      self.isOpen = false;
    };

    verifyMenuByUrl();
  }]
);
