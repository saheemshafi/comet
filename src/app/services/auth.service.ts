import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '@angular/fire/auth';
import { UserAccount } from '../interfaces/user-account';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: User;
  constructor(private fireAuth: AngularFireAuth) {}
  signWithGoogle(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.fireAuth.signInWithPopup(provider).then((credentials) => {
      this.user = <User>credentials.user;
    });
  }
  signUpWithEmail(user: UserAccount): void {
    this.fireAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((credentials) => {
        this.user = <User>credentials.user;
      });
  }
  loginWithEmail(user: UserAccount): void {
    this.fireAuth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((credentials) => {
        this.user = <User>credentials.user;
        console.log(credentials.user);
      });
  }
  logout(): void {
    this.fireAuth.signOut();
  }
}
