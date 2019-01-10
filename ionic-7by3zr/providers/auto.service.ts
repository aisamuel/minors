import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
//import { NavController } from 'ionic-angular';
import { WelcomePage } from '../pages/welcome/welcome';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AutoService {

  alerts: any;
  err: any;
  constructor( private afAuth: AngularFireAuth ) { 
    
    let name: string;
    let email: string;
    let photoUrl: string;
    let emailVerified: any;
    let uid: any;
    
    
    
    let user = this.afAuth.auth.currentUser;

    if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid; 
    }

  }
  glogin() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  signUp(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(() => this.afAuth.auth.currentUser.sendEmailVerification()
            .then((alert) => {
                console.log('Please verify your email');
                this.err = "";
                this.alerts = 'Click on the link sent to your Email to continue';
            }).catch((error) => {
                this.err = error;
                this.alerts = "";
                console.log('Error: ' + error);
                
            }));
   };

  signIn(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((alert) => {
      //this.router.navigateByUrl('/store');
      //this.navCtrl.push(WelcomePage);
      this.alerts = 'You have successfully signed in';
      this.err = "";
      console.log('You have successfully signed in');

    }).catch((error) => {
      this.err =error;
      this.alerts = "";
      console.log('Error: ' + error)
    })
  }
  logOut() {
      this.afAuth.auth.signOut();
  }

  resetPass(emailAddress: string){
    this.afAuth.auth.sendPasswordResetEmail(emailAddress).then     
    ((alert) => {   
      // Email sent.
      this.alerts = 'Please check your email to continue';
      this.err = "";
      console.log('Please check your email to continue');
    }).catch((error) => {
      // An error happened.
      this.err = error;
      this.alerts = "";
      console.log(error)
    });
  }

  
}