import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '@angular/fire/auth';
import { UserAccount } from '../interfaces/user-account';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private fireAuth: AngularFireAuth, private router: Router) {
    let isAuthenticated = this.fireAuth.authState.pipe(
      map((authState) => !!authState),
      map((auth) => {
        if (!auth) {
          this.router.navigate(['/auth/login']);
        }
        return auth;
      })
    );
    isAuthenticated.subscribe((auth) => {
      this.isLoggedIn.next(auth);
    });
  }
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
    // localStorage.setItem('user', JSON.stringify(user));
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
    localStorage.removeItem('user');
  }
}
