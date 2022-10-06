import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/search';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements OnInit {
  @Input() videos: Item[] = [];
  constructor() {}
  ngOnInit(): void {}
}
