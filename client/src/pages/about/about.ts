import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService }   from './auth.service';

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
  constructor(public navCtrl: NavController, private auth: AuthService) {

  }

  login() {
    this.auth.signInWithGoogle().then(() => this.onSignInSuccess());
  }

  onSignInSuccess() {
    console.log("yo!!!!!");
  }
}
