import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController} from 'ionic-angular';
import { AuthService } from "../../services/firebase";
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  hideFront = true;
  showSignUp = false;
  showLogIn = false;
  loginForm;
 

  toggleFront() {
    this.hideFront = !this.hideFront;
  }

  toggleSignIn() {
    this.showLogIn = !this.showLogIn;
  }

  toggleSignUp() {
    this.showSignUp = !this.showSignUp;
  }
  constructor(public navCtrl: NavController, private firebase: AuthService, 
              private alertCtrl: AlertController, private loadingCtrl: LoadingController,
              private fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  onSignIn() {

    let aux = this.firebase.signin(this.loginForm.value.email, this.loginForm.value.password);
    if (aux)
      this.onSignInSuccess();
    else
      this.showLogIn = false;
    
      
  }

  onSignUp() {

    if (this.firebase.signup(this.loginForm.value.email, this.loginForm.value.password))
      this.onSignInSuccess();
    else
      this.showSignUp = false;
    
      
  }

  onSignInSuccess() {
    console.log("yo!!!!!");
  }
}
