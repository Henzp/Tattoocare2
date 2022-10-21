import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: 'home', icon: 'home' },
    { title: 'Calendario', url: 'calendario', icon: 'calendar-number' },
    { title: 'Entradas', url: 'entradas', icon: 'book' },
    { title: 'Login', url: 'login', icon: 'log-in' },
    { title: 'Configuración', url: 'configuracion', icon: 'cog' },
      ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
