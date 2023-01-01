import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { PageInfo } from 'src/app/interfaces/page-info';
import { PageInfoService } from 'src/app/services/page-info.service';
import { LocalstorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  pageInfos: PageInfo[] = [];
  constructor(
    private pageInfoService: PageInfoService,
    private router: Router,
    private storage: LocalstorageService
  ) {}

  ngOnInit(): void {
    if(AppComponent.isBrowser){
      const user: User = JSON.parse(<string>this.storage.getItem('user'));
      if (user) this.router.navigate(['/d']);
      this.pageInfoService
        .getInfo()
        .subscribe((pageInfos) => (this.pageInfos = pageInfos));
    }
    }
}
