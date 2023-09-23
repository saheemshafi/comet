import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Item } from 'src/app/interfaces/search';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-channel-playlists',
  templateUrl: './channel-playlists.component.html',
  styleUrls: ['./channel-playlists.component.css'],
})
export class ChannelPlaylistsComponent implements OnInit {
  channelId: string = '';
  playlists!: Item[];
  fetched: boolean = false;
  constructor(
    private channelService: ChannelService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.parent?.paramMap.subscribe((params) => {
      this.channelId = <string>params.get('channelId');
      if (!this.channelId) return;
      this.channelService
        .getChannelPlaylists(this.channelId)
        .subscribe((response) => {
          this.fetched = true;
          this.playlists = response.items;
        });
    });
  }
}
