import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  search(form: NgForm): void {
    if (form.invalid) return;
    this.router.navigate(['/d/search'], {
      queryParams: { q: form.value.query },
    });
    form.resetForm('');
  }
}
