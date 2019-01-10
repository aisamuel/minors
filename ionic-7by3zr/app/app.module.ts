import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Firebase } from '@ionic-native/firebase';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication';
import {AutoService } from '../providers/auto.service';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LogInPage } from '../pages/login/login';
import { SignUpPage } from '../pages/signup/signup';
import { ResetPage } from '../pages/reset/reset';
import { SlidesPage } from '../pages/slides/slides';
import { WelcomePage } from '../pages/welcome/welcome';
import { QuestionsPage } from '../pages/questions/questions';




const config = {
    
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SignUpPage,
    LogInPage,
    ResetPage,
    SlidesPage,
    WelcomePage,
    QuestionsPage,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SignUpPage,
    LogInPage,
    ResetPage,
    SlidesPage,
    WelcomePage,
    QuestionsPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler,},
    AutoService,
    Firebase, FirebaseAuthentication,
  ]
})
export class AppModule {}
