import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'AngularFire2/auth';
// Do not import from 'firebase' as you'll lose the tree shaking benefits
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  private currentUser: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
  }

  get authenticated(): boolean {
    return this.currentUser !== null;
  }

  signInWithGoogle(): firebase.Promise<any> {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(resp => resp).catch(error => console.log(error));
  }

  signOut(): void {
    this.afAuth.auth.signOut();
  }

  displayName(): string {
    if (this.currentUser !== null) {
      return this.currentUser.displayName;
    } else {
      return '';
    }
  }
}