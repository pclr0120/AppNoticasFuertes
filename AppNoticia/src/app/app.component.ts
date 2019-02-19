import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'HOY',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Politica',
      url: '/list',
      icon: 'list'
    }
    ,
    {
      title: 'Deporte',
      url: '/list',
      icon: 'list'
    }
    ,
    {
      title: 'Tecnologia',
      url: '/list',
      icon: 'list'
    }
    ,
    {
      title: 'Cultura',
      url: '/list',
      icon: 'list'
    }
    ,
    {
      title: 'Sociales',
      url: '/list',
      icon: 'list'
    }
    ,
    {
      title: 'Mochicahui',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }
  
  CerrarMenu() {
    //this.menu.open('Categorias');
    this.menu.close('Categorias');
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
