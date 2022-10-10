import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel } from 'src/app/interfaces/channel';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-channel-page',
  templateUrl: './channel-page.component.html',
  styleUrls: ['./channel-page.component.css'],
})
export class ChannelPageComponent implements OnInit {
  channelId: string = '';
  channel!: Channel;
  constructor(
    private channelSerive: ChannelService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.channelId = <string>params.get('channelId');
      if (!this.channelId) return;
      this.channelSerive.getChannel(this.channelId).subscribe((response) => {
        this.channel = response.items[0];
      });
    });
  }
}
