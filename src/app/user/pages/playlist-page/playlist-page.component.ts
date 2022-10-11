import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistDetails } from 'src/app/interfaces/playlist';
import { Videos } from 'src/app/interfaces/playlistItems';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.css'],
})
export class PlaylistPageComponent implements OnInit {
  playlistId: string = '';
  playlistDetails!: PlaylistDetails;
  videos: Videos[] = [];
  fetched: boolean = false;
  nextPageToken: string = '';
  constructor(
    private playlistService: PlaylistService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.playlistId = <string>params.get('playlistId');
      if (!this.playlistId) return;
      this.playlistService
        .getPlaylistDetails(this.playlistId)
        .subscribe((response) => {
          this.playlistDetails = response.items[0];
        });
      this.playlistService
        .getPlaylistVideos(this.playlistId)
        .subscribe((response) => {
          this.fetched = true;
          this.nextPageToken = response.nextPageToken;
          this.videos = response.items;
        });
    });
  }

  fetchNextPage() {
    this.fetched = false;
    this.playlistService
      .getNextPage(this.nextPageToken)
      .subscribe((response) => {
        this.fetched = true;
        if(!this.nextPageToken) return;
        this.nextPageToken = response.nextPageToken
          ? response.nextPageToken
          : '';
        this.videos = this.videos.concat(response.items);
      });
  }
}
