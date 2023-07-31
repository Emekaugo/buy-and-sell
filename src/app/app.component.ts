import { Component } from '@angular/core';

// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { Auth, GoogleAuthProvider } from 'firebase/compat/auth';
// import { GoogleAuthProvider } from 'firebase/auth';
// import * as firebase from 'firebase/app'; import 'firebase/auth';

import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Z-buy-and-sell';

  constructor(public auth: AngularFireAuth) {}

  // signInClicked(): void {
  //   this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  // }

  // signInClicked(): void {
  //   this.auth
  //     .signInWithPopup(new auth.GoogleAuthProvider())
  //     .then((result) => {
  //       // Handle successful sign-in, if needed.
  //       console.log('Sign-in successful:', result.user);
  //     })
  //     .catch((error) => {
  //       console.error('Sign-in error:', error);
  //       // Handle the error and display a user-friendly message.
  //     });
  // }

  signInClicked(): void {
    this.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .catch((error) => console.error('Sign-in error:', error));
  }

  signOutClicked(): void {
    this.auth.signOut();
  }
}
