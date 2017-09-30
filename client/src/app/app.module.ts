import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
<<<<<<< HEAD

=======
>>>>>>> 2dd22d8729818f36e1e9d3aaf205ea2740207ace

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from "@angular/http";
import { AuthService } from "../services/firebase";


export const firebaseConfig = {
  apiKey: "AIzaSyD2a8Rdcnj1fPFi_ZlQf5SNEMlezWjwWfk",
  authDomain: "firsttest-92ed3.firebaseapp.com",
  databaseURL: "https://firsttest-92ed3.firebaseio.com",
  projectId: "firsttest-92ed3",
  storageBucket: "firsttest-92ed3.appspot.com",
  messagingSenderId: "656800904558"
};





@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
<<<<<<< HEAD
    TabsPage
=======
    TabsPage,
>>>>>>> 2dd22d8729818f36e1e9d3aaf205ea2740207ace
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxmjzIytJXSp-gKVKwUB5S1tOAusl1S3c'
    }),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    AuthService
  ]
})
export class AppModule {}
