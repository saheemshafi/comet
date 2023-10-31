import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Channel } from 'src/app/interfaces/channel';
import { ChannelService } from 'src/app/services/channel.service';
import { SeoService } from 'src/app/services/seo.service';

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
    private activatedRoute: ActivatedRoute,
    private meta: SeoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.channelId = <string>params.get('channelId');
      if (!this.channelId) return;
      this.channelSerive.getChannel(this.channelId).subscribe((response) => {
        this.channel = response.items[0];
        this.meta.updateMetaData(
          this.channel.snippet.title,
          this.channel.snippet.description,
          `https://comet-multimedia.up.railway.app${this.router.url}`,
          this.channel.snippet.thumbnails.default.url
        );
      });
    });
  }
}
