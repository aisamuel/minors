import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { SignUpPage } from '../pages/signup/signup';
import { LogInPage } from '../pages/login/login';
import { SlidesPage } from '../pages/slides/slides';
import { QuestionsPage } from '../pages/questions/questions';


@Component({
  selector: 'page-home',
  templateUrl: 'app.html',
  styleUrls: [ 'app.scss' ] 
})
export class MyApp {
  rootPage:any = SlidesPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  }
}
