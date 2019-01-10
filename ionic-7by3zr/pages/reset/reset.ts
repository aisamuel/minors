import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AutoService } from '../../providers/auto.service';

@Component({
  selector: 'page-home',
  templateUrl: 'reset.html'
})
export class ResetPage {
  constructor(public navCtrl: NavController,
    public auto: AutoService) { }

  reset(emailAddress: string) {
     this.auto.resetPass(emailAddress);
   };
}