import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationEnd, Router, Event } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { LanguageCode } from 'src/app/interfaces/lang-translation';
import { SidebarService } from 'src/app/services/sidebar.service';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isHidden: boolean = false;
  baseRoute: string = '';
  currentPreference: string = this.langService.getPreference() ?? 'en';
  languages!: Observable<LanguageCode[]>;
  constructor(
    private router: Router,
    public sidebarService: SidebarService,
    private langService: TranslationService
  ) {}

  ngOnInit(): void {
    this.languages = this.langService.getLanguages();
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
