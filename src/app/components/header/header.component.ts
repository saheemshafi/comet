import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationEnd, Router, Event } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isHidden: boolean = false;
  baseRoute: string = '';
  constructor(
    private router: Router,
    public sidebarService: SidebarService,
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isHidden = ['/playlist/', '/channel/', '/video/'].some((item) => {
          return event.url.includes(item);
        });
      }
    });
  }
  search(form: NgForm): void {
    if (form.invalid) return;
    this.router.navigate(['/search'], {
      queryParams: { q: form.value.query },
    });
    form.resetForm('');
  }
}
