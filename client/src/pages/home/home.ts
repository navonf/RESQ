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

  public base64Image: string;
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


  constructor(public navCtrl: NavController,
    private geolocation: Geolocation,
	  private fb: FormBuilder,
    private transfer: FileTransfer,
    private file: File,
    private camera: Camera,
    private imagePicker: ImagePicker) {
  }



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
      Lat: [0, Validators.required ],
      Lng: [0, Validators.required ],
      Missing: [true, Validators.required]
    });


  }

  open() {
  	this.w.open();
  }

  setRegister(event) {
  	this.showModal = true;
  	this.missingForm.Name = "";
  	this.missingForm.Age = "";
  	this.missingForm.Gender = "";
  	this.missingForm.Lat = event.coords.lat;
  	this.missingForm.Lng = event.coords.lng;
  	this.missingForm.Missing = true;
  }


  setMarker() {
  	this.showModal=false;
  	this.missings.push({Name: this.missingForm.Name, Age: this.missingForm.Age,
  					  Gender: this.missingForm.Gender, Lat: this.missingForm.Lat,
  					  Lng: this.missingForm.Lng, Missing: this.missingForm.Missing});
  	// this.writeList();
  	this.updateList({Name: this.missingForm.Name, Age: this.missingForm.Age,
  					  Gender: this.missingForm.Gender, Lat: this.missingForm.Lat,
  					  Lng: this.missingForm.Lng, Missing: this.missingForm.Missing});
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

  // takePicture() {
  //   this.camera.getPicture(this.options).then((imageData) => {
  //    // imageData is either a base64 encoded string or a file URI
  //    // If it's base64:
  //    let base64Image = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //    // Handle error
  //   });
  // }

  selectPicture() {
    this.imagePicker.getPictures(this.options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }

  writeList() {
  	this.firebase.writeVictims(this.missings);
  }

  updateList(person) {
  	this.firebase.updateVictims(person);
  }


}
