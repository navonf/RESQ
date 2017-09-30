import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Login }    from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireModule } from 'angularfire2';
import { AuthService }      from '../pages/about/auth.service';


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
    ContactPage,
    HomePage,
    TabsPage,
    Login
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxmjzIytJXSp-gKVKwUB5S1tOAusl1S3c'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
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
