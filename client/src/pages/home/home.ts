import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService }				from '../../services/firebase';
import { Observable } from 'rxjs/Observable';
import { Camera } from 'ionic-native';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {

  	// public base64Image: string;
	title: string = "Test ShellHacks2017";
	missings = [];
	showModal = false;
	ucflat = 28.6024274;
 	ucflng = -81.2000599;
 	icon = "assets/icon.png";
  	f = true;
  	@ViewChild('window')
  	w;
  	missingForm;
  	items: Observable<any[]>;
  	imageSrc: string;
  	selected;
  	showModalUpdate = false;
  	savedIcon = "assets/savedicon.png";

  constructor(public navCtrl: NavController, private geolocation: Geolocation,
  			  private fb: FormBuilder, private firebase: AuthService) {
  }

  ngOnInit() {
  	this.firebase.readVictims().subscribe(items => {
  		this.missings = [];
  		items.forEach(snapshot => {
          this.missings.push(snapshot);
        });
        console.log(this.missings);
  	});

  	this.missingForm = this.fb.group({
      Name: ['', Validators.required ],
      Age: ['', Validators.required ],
      Gender: ['', Validators.required ],
      Lat: [0, ],
      Lng: [0, ],
      Missing: [true],
      Url: ''
    });


  }

  open() {
  	this.w.open();
  }

  setRegister(event) {
  	this.imageSrc = null;
  	this.showModal = true;
  	this.missingForm.Name = "";
  	this.missingForm.Age = "";
  	this.missingForm.Gender = "";
  	this.missingForm.Lat = event.coords.lat;
  	this.missingForm.Lng = event.coords.lng;
  	this.missingForm.Missing = true;
  	this.missingForm.Url = "";

  }


  setMarker() {
  	this.showModal=false;
  	this.missings.push({Name: this.missingForm.Name, Age: this.missingForm.Age,
  					  Gender: this.missingForm.Gender, Lat: this.missingForm.Lat,
  					  Lng: this.missingForm.Lng, Missing: this.missingForm.Missing,
  					  Url: this.missingForm.Url});

  	// this.writeList();
  	this.updateList({Name: this.missingForm.Name, Age: this.missingForm.Age,
  					  Gender: this.missingForm.Gender, Lat: this.missingForm.Lat,
  					  Lng: this.missingForm.Lng, Missing: this.missingForm.Missing,
  					  Url: this.missingForm.Url});
  }

  getLocalization() {
  	const subscription = this.geolocation.watchPosition().subscribe(position => {
  		this.ucflng = position.coords.longitude;
  		this.ucflat = position.coords.latitude;
  		subscription.unsubscribe();
	});
  }

  centerChange(event) {
  	this.ucflat = event.lat;
	  this.ucflng = event.lng;
  }

  writeList() {
  	this.firebase.writeVictims(this.missings);
  }

  updateList(person) {
  	this.firebase.updateVictims(person);
  }

  private openGallery (): void {
  let cameraOptions = {
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: Camera.DestinationType.FILE_URI,      
    quality: 100,
    targetWidth: 500,
    targetHeight: 500,
    encodingType: Camera.EncodingType.JPEG,      
    correctOrientation: true
  }

  Camera.getPicture(cameraOptions)
    .then(file_uri => this.imageSrc = file_uri, 
    err => console.log(err));  
    console.log (this.imageSrc); 
  }

  uploadPhoto() {
  	this.firebase.postFile(this.imageSrc);
  }

  updateStatus(selected) {
  	this.showModalUpdate = true;
  	this.selected = selected;
  }

  updateStatusList(selected) {
  	this.updateList(selected);
  }



}
