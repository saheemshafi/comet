import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  static isBrowser: boolean = false;
  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    AppComponent.isBrowser = isPlatformBrowser(this.platformId);
  }
}
