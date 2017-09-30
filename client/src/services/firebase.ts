import firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class FireBase {

  signup(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  signin(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

}

