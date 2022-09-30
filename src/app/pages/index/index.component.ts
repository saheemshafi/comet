import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { PageInfo } from 'src/app/interfaces/page-info';
import { PageInfoService } from 'src/app/services/page-info.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  pageInfos: PageInfo[] = [];
  constructor(private pageInfoService: PageInfoService) {}

  ngOnInit(): void {
    this.pageInfoService
      .getInfo()
      .subscribe((pageInfos) => (this.pageInfos = pageInfos));
  }
}
