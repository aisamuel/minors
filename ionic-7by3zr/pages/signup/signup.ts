import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { FormGroup,FormControl} from '@angular/forms';
import {AutoService } from '../../providers/auto.service';

@Component({
  selector: 'page-home',
  templateUrl: 'signup.html'
})
export class SignUpPage {

  signup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(public navCtrl: NavController,
    public auto: AutoService, public loadingCtrl: LoadingController) {

  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();
  }

  create(){
    let email: string = this.signup.value["email"];
    let password: string = this.signup.value["password"];

    this.auto.signUp(email, password);
  }

  createAndLoading(){
    this.presentLoading();
    this.create();
  }

}