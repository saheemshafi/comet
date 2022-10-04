import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAccount } from 'src/app/interfaces/user-account';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  signUpWithGoogle() {
    this.authService.signWithGoogle();
  }
  signUpWithEmail(form: NgForm): void {
    this.authService.signUpWithEmail(form.value);
  }
  logout() {
    this.authService.logout();
  }
}
