import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-category-card',
  templateUrl: './index-category-card.component.html',
  styleUrls: ['./index-category-card.component.css'],
})
export class IndexCategoryCardComponent implements OnInit {
  @Input() src?: string = '';
  @Input() category: string = '';
  constructor() {}

  ngOnInit(): void {}
}
