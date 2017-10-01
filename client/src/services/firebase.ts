import firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

	user: Observable<firebase.User>;
	header;

	constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, private http: Http) {
    	this.user = afAuth.authState;
  	}

  signup(email: string, password: string) {
  	console.log(email);
  	console.log(password);
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(value => {
        return true;
      })
      .catch(err => {
        return false;
      });    
  }

  signin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(value => {
        return true;
      })
      .catch(err => {
        return false;
      });
  }

  readVictims() {
  	return this.db.list('/victims');
  }

  writeVictims(items) {
  	this.db.database.ref('/victims/').set(items);
  }


  updateVictims(item) {
  	this.db.database.ref('/victims/'+item.Name).set(item);
  }

	
	postFile(inputValue: any) {
		console.log(inputValue.name);
		this.header = new Headers();
	    this.header.set('Content-Type', 'multipart/form-data');
	    let url = 'https://api.cloudinary.com/v1_1/dtoe4by6a/image/upload';
	    var formData = new FormData();
	    formData.append("file",  inputValue);
	    formData.append("upload_preset",  "amardoj5");

	    return this.http.post(url,formData,{ headers: this.header }).subscribe(resp => console.log(resp));


	}


}

