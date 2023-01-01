import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/search';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.css'],
})
export class PlaylistCardComponent implements OnInit {
  @Input() playlist!: Item;
  constructor() {}

  ngOnInit(): void {}
}
