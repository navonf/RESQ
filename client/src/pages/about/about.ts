import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController} from 'ionic-angular';
// import { AuthService }   from './auth.service';
import {FireBase} from "../../services/firebase";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  hideFront = true;
  showSignUp = false;
  showLogIn = false;

  toggleFront() {
    this.hideFront = !this.hideFront;
  }

  toggleSignIn() {
    this.showLogIn = !this.showLogIn;
  }

  toggleSignUp() {
    this.showSignUp = !this.showSignUp;
  }
  constructor(public navCtrl: NavController, private firebase: FireBase, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {

  }

  onSignIn(form: NgForm) {
    console.log(form.value);

    const loading = this.loadingCtrl.create({
      content: 'Logging you in...'
    });

    loading.present();

    // Luis: Calls the signin method in the auth-service.ts file. This calls the signin request to firebase.
    this.firebase.signin(form.value.email, form.value.password)
    // Luis: handles the case when the sign up is successful.
      .then(data => {
        loading.dismiss();

      })
      // Luis: handles the case when the sign up is not successful.
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signin Failed!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
  }

  onSignInSuccess() {
    console.log("yo!!!!!");
  }
}
