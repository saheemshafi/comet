import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  categories: any[] = [];
  constructor() {
    this.categories = [
      { name: 'music', icon: '' },
      { name: 'Movies', icon: '' },
      { name: 'Gaming', icon: '' },
      { name: 'Education', icon: '' },
      { name: 'Health', icon: '' },
      { name: 'News', icon: '' },
      { name: 'Trending', icon: '' },
      { name: 'Sports', icon: '' },
      { name: ' Fashion and beauty', icon: '' },
      { name: 'Live', icon: '' },
    ];
  }

  ngOnInit(): void {}
}
