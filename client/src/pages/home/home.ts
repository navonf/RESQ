import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { FormBuilder, Validators } from '@angular/forms';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';


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


  constructor(public navCtrl: NavController,
    private geolocation: Geolocation,
	  private fb: FormBuilder,
    private transfer: FileTransfer,
    private file: File,
    private camera: Camera,
    private imagePicker: ImagePicker) {
  }

    // fileTransfer: FileTransferObject = this.transfer.create();
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  ngOnInit() {
  	let point1 = {name:"Navon", age:"22", gender:"m", lat: 25.759591,lng: -80.374240};
  	let point2 = {name:"Luis", age:"24", gender:"m",lat: 28.6024274,lng: -81.2000599};
  	this.missings.push(point1);
  	this.missings.push(point2);
  	console.log(this.missings);


  	this.missingForm = this.fb.group({
      name: ['', Validators.required ],
      age: ['', Validators.required ],
      gender: ['', Validators.required ],
      lat: [0, Validators.required ],
      lng: [0, Validators.required ]
    });


  }

  open() {
  	this.w.open();
  }

  setRegister(event) {
  	this.showModal = true;
  	this.missingForm.name = "";
  	this.missingForm.age = "";
  	this.missingForm.gender = "";
  	this.missingForm.lat = event.coords.lat;
  	this.missingForm.lng = event.coords.lng;
  }


  setMarker() {
  	this.showModal=false;
  	this.missings.push({name: this.missingForm.name, age: this.missingForm.age,
  					  gender: this.missingForm.gender, lat: this.missingForm.lat,
  					  lng: this.missingForm.lng});
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


}
