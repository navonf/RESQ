import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController) {

  }

  title: string = "Test ShellHacks2017";
  lat: number = 25.759591;
  lng: number = -80.374240;

  ucflat = 28.6024274;
  ucflng = -81.2000599;
  // icon = "https://www.shareicon.net/data/128x128/2016/04/21/753224_hospital_512x512.png";
  icon = "assets/icon.png";
  @ViewChild('window')
  w;


  ngOnInit() {

  }

  open() {
  	console.log("test");
  	this.w.open();
  }


}
