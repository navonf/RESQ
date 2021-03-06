import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from "@angular/http";
import { AuthService } from "../services/firebase";
import { CloudinaryModule } from '@cloudinary/angular-4.x';
import * as  Cloudinary from 'cloudinary-core';
import { Ng2CloudinaryModule } from 'ng2-cloudinary';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';
// import { Camera, CameraOptions } from '@ionic-native/camera';
// import { ImagePicker } from '@ionic-native/image-picker';


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
    TabsPage
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxmjzIytJXSp-gKVKwUB5S1tOAusl1S3c'
    }),
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'dtoe4by6a', upload_preset: 'amardoj5'}),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Ng2CloudinaryModule
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
    AuthService,
    AngularFireDatabase
  ]
})
export class AppModule {}
