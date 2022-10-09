import { Component, Input, OnInit } from '@angular/core';
import { Channel } from 'src/app/interfaces/channel';
import { Item } from 'src/app/interfaces/search';

@Component({
  selector: 'app-channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.css'],
})
export class ChannelCardComponent implements OnInit {
  @Input() channel!: Item;
  constructor() {}

  ngOnInit(): void {
    console.log(this.channel);
  }
}
