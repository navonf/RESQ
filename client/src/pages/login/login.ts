import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {FireBase} from "../../services/firebase";
/**
 * Generated class for the Login page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController,
              private firebase: FireBase, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
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

}
