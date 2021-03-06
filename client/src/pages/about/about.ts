import { Component } from '@angular/core';
import { NavController, App} from 'ionic-angular';
import { AuthService } from "../../services/firebase";
import { FormBuilder, Validators } from '@angular/forms';
import { HomePage }    from '../home/home';

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
              private fb: FormBuilder, public appCtrl: App) {
    this.loginForm = fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  onSignIn() {
    this.firebase.signin(this.loginForm.username, this.loginForm.password).then(resp => {
      this.onSignInSuccess();
    }).catch(erro => { this.showLogIn = false; this.hideFront = true;});
  }

  onSignUp() {
    this.firebase.signup(this.loginForm.username, this.loginForm.password).then(resp => {
      this.onSignInSuccess();
    }).catch(erro => { this.showSignUp = false; this.hideFront = true;});
  }

  onSignInSuccess() {
    this.loginForm.username = '';
    this.loginForm.password = '';
    this.navCtrl.setRoot(HomePage);

  }
}
