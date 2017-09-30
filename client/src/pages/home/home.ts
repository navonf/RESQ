import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

	title: string = "Test ShellHacks2017";
	missings = [];
	showModal = false;
	ucflat = 28.6024274;
 	ucflng = -81.2000599;
 	icon = "assets/icon.png";
  	f = true;
  	@ViewChild('window')
  	w;
  	eventSaved;



  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
  	let point1 = {lat: 25.759591,lng: -80.374240};
  	let point2 = {lat: 28.6024274,lng: -81.2000599};
  	this.missings.push(point1);
  	this.missings.push(point2);
  	console.log(this.missings);
  } 

  open() {
  	this.w.open();
  }

  setRegister(event) {
  	this.showModal = true;
  	this.eventSaved = event;
  }


  setMarker() {
  	this.showModal=false;
  	this.missings.push({lat: this.eventSaved.coords.lat,lng: this.eventSaved.coords.lng});
  }


}
