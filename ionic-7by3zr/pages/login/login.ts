import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { FormGroup,FormControl} from '@angular/forms';
import { SignUpPage } from '../signup/signup';
import { ResetPage } from '../reset/reset';
import { QuestionsPage } from '../questions/questions';
import {AutoService } from '../../providers/auto.service';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html',
  styleUrls: [ 'login.scss' ] 
})
export class LogInPage {

  logins = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  err: any; 
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public auto: AutoService) {
      this.err = this.auto.err;
  }

  login(){
    let email: string = this.logins.value["email"];
    let password: string = this.logins.value["password"];

    this.auto.signIn(email, password);
  }

  logOut() {
    this.auto.logOut();
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();
  }

  pushSignUpPage(){
    this.navCtrl.push(SignUpPage);
  }

  pushResetPage(){
    this.navCtrl.push(ResetPage);
  }

  pushQuestionsPage(){
    this.navCtrl.push(QuestionsPage);
  }

  SignUpAndLoading(){
    this.presentLoading();
    this.pushSignUpPage();
  }

  ResetAndLoading(){
    this.presentLoading();
    this.pushResetPage();
  }

  logOutAndLoading(){
    this.presentLoading();
    this.logOut();
  }

  QuestionsAndLoading(){
    this.presentLoading();
    this.pushQuestionsPage();
  }

}