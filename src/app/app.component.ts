import { Component ,ViewChild} from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { JxLoginPage } from '../pages/jx-login/jx-login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  navigate:any;
  @ViewChild(Nav) nav: Nav;
 // rootPage:any = HomePage;
 //rootPage: any = HomePage;
  rootPage: any = JxLoginPage;
//  rootPage: any = BoutiqueLoginPage;

 //rootPage: any = BoutiqueTabsPage;
  pages: Array<{title: string, component: any}>;

  constructor(private platform: Platform, private statusBar: StatusBar,private splashScreen: SplashScreen) {
    
    this.sideMenu();
    this.initializeApp();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Chat",
        url   : "/chat",
        icon  : "chatboxes"
      },
      {
        title : "Contacts",
        url   : "/contacts",
        icon  : "contacts"
      },
    ]
  }

}

