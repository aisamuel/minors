import { Component } from '@angular/core';
import {AutoService } from '../../providers/auto.service';
import { LoadingController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { LogInPage } from '../login/login';
import { QuestionsPage } from '../questions/questions';

@Component({
  selector: 'page-home',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public autoService: AutoService) {

  }


  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();
  }

  pushLogInPage(){
    this.navCtrl.push(LogInPage);
  }

  pushQuestionsPage(){
    this.navCtrl.push(QuestionsPage);
  }

  LogInAndLoading(){
    this.presentLoading();
    this.pushLogInPage();
  }

  QuestionsAndLoading(){
    this.presentLoading();
    this.pushQuestionsPage();
  }

}
