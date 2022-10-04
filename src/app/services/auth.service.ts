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
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}
  signWithGoogle(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.fireAuth.signInWithPopup(provider).then((credentials) => {
      this.navigateAndSaveUser(<User>credentials.user);
    });
  }
  signUpWithEmail(user: UserAccount): void {
    this.fireAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((credentials) => {
        this.navigateAndSaveUser(<User>credentials.user);
      });
  }
  navigateAndSaveUser(user: User): void {
    this.router.navigate(['d']);
    localStorage.setItem('uid', user.uid);
  }
  loginWithEmail(user: UserAccount): void {
    this.fireAuth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((credentials) => {
        this.navigateAndSaveUser(<User>credentials.user);
      });
  }
  logout(): void {
    this.fireAuth.signOut();
    this.router.navigate(['auth/login']);
  }
}
