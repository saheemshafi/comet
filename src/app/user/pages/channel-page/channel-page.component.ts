import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
    private meta:Meta,
    private title:Title,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.channelId = <string>params.get('channelId');
      if (!this.channelId) return;
      this.channelSerive.getChannel(this.channelId).subscribe((response) => {
        this.channel = response.items[0];
        this.title.setTitle(this.channel.snippet.title);
        this.meta.updateTag({
          name: 'title',
          content: this.channel.snippet.title,
        });
        this.meta.updateTag({
          name: 'description',
          content: this.channel.snippet.description,
        });
        this.meta.updateTag({
          property: 'og:image',
          content: this.channel.snippet.thumbnails.default.url,
        });
        this.meta.updateTag({
          property: 'og:image:secure_url',
          content: this.channel.snippet.thumbnails.default.url,
        });
        this.meta.updateTag({
          property: 'og:title',
          content: this.channel.snippet.title,
        });
        this.meta.updateTag({
          property: 'og:url',
          content: 'https://comet-multimedia.vercel.app' + this.router.url,
        });
      });
    });
  }
}
