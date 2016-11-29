import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {PlayingPage} from './pages/playing/playing';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  pages: Array<{component: any, title: string}>

  constructor(platform: Platform) {

    this.pages = [
      { component: HomePage, title: "Home" },
      { component: PlayingPage, title: "Jogando" }
    ]
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page): void {
    this.rootPage = page.component;
  }
}

ionicBootstrap(MyApp);
