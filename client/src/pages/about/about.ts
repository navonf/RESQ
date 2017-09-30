import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  hideFront = true;
  showSignUp = false;

  toggleFront() {
    this.hideFront = !this.hideFront;
    this.showSignUp = !this.showSignUp;
  }

  constructor(public navCtrl: NavController) {

  }

}
