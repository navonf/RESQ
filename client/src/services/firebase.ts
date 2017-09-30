import firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
// import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

	user: Observable<firebase.User>;

	constructor(public afAuth: AngularFireAuth) {
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

}

