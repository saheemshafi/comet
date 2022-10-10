import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/interfaces/search';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-channel-videos',
  templateUrl: './channel-videos.component.html',
  styleUrls: ['./channel-videos.component.css'],
})
export class ChannelVideosComponent implements OnInit {
  channelId: string = '';
  videos!: Item[];
  constructor(
    private channelSerive: ChannelService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.parent?.paramMap.subscribe((params) => {
      this.channelId = <string>params.get('channelId');
      if (this.channelId === '') return;
      this.channelSerive
        .getChannelVideos(this.channelId)
        .subscribe((response) => {
          this.videos = response.items;
        });
    });
  }
}
