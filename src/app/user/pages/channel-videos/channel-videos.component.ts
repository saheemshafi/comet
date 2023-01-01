import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
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
  fetched: boolean = false;
  nextPageToken: string = '';
  constructor(
    private channelSerive: ChannelService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (AppComponent.isBrowser) {
      this.activatedRoute.parent?.paramMap.subscribe((params) => {
        this.channelId = <string>params.get('channelId');
        if (this.channelId === '') return;
        this.channelSerive
          .getChannelVideos(this.channelId)
          .subscribe((response) => {
            this.nextPageToken = response.nextPageToken;
            this.fetched = true;
            this.videos = response.items;
          });
      });
    }
  }

  fetchMoreVideos(): void {
    if (!this.nextPageToken) return;
    this.fetched = false;
    this.channelSerive
      .getMoreVideos(this.nextPageToken)
      .subscribe((response) => {
        this.nextPageToken = response.nextPageToken
          ? response.nextPageToken
          : '';
        this.videos = this.videos.concat(response.items);
        this.fetched = true;
      });
  }
}
