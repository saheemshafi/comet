import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth) {}
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.fireAuth.signInWithPopup(provider).then((credentials) => {
      console.log(credentials.user);
    });
  }
  logout(): void {
    this.fireAuth.signOut();
  }
}
