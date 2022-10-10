import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isMenuClosed: boolean = true;
  constructor() {}
  toggleMenu(): void {
    this.isMenuClosed = !this.isMenuClosed;
  }
}
