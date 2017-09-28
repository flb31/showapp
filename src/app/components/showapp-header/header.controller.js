angular.module('showApp').controller('HeaderController', [
  'Config', '$location', 'Menu', 'ShowsService', function (Config, $location, Menu, ShowsService) {
    const self = this;
    self.title = Config.title;
    self.menu = Menu;
    self.isOpen = false;
    const menuActive = 'menu__item-active';
    let currentItem = -1;

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
      currentItem = index;
      self.menu[index].class = menuActive;
    };
    
    self.changeMenu = (index) => {
      if(currentItem != index) {
        ShowsService.set([]);
      }
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
