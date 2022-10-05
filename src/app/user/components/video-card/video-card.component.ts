import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/search';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css'],
})
export class VideoCardComponent implements OnInit {
  @Input() video!: Item;
  constructor() {}

  ngOnInit(): void {}
}
