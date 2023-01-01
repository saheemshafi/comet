import { Component, Input, OnInit } from '@angular/core';
import { PageInfo } from 'src/app/interfaces/page-info';

@Component({
  selector: 'app-page-info',
  templateUrl: './page-info.component.html',
  styleUrls: ['./page-info.component.css'],
})
export class PageInfoComponent implements OnInit {
  @Input() pageInfo!: PageInfo;
  @Input() isOdd: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
