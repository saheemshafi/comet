import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
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
    private activatedRoute: ActivatedRoute,
    private meta: Meta,
    private title: Title,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (AppComponent.isBrowser) {
      this.activatedRoute.paramMap.subscribe((params) => {
        this.playlistId = <string>params.get('playlistId');
        if (!this.playlistId) return;
        this.playlistService
          .getPlaylistDetails(this.playlistId)
          .subscribe((response) => {
            this.playlistDetails = response.items[0];
            this.title.setTitle(this.playlistDetails.snippet.title);
            this.meta.updateTag({
              name: 'title',
              content: this.playlistDetails.snippet.title,
            });
            this.meta.updateTag({
              name: 'description',
              content: this.playlistDetails.snippet.description,
            });
            this.meta.updateTag({
              property: 'og:image',
              content: this.playlistDetails.snippet.thumbnails.standard.url,
            });
            this.meta.updateTag({
              property: 'og:image:secure_url',
              content: this.playlistDetails.snippet.thumbnails.standard.url,
            });
            this.meta.updateTag({
              property: 'og:title',
              content: this.playlistDetails.snippet.title,
            });
            this.meta.updateTag({
              property: 'og:url',
              content: 'https://comet-multimedia.netlify.app' + this.router.url,
            });
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
  }

  fetchNextPage() {
    if (!this.nextPageToken) return;
    this.fetched = false;
    this.playlistService
      .getNextPage(this.nextPageToken)
      .subscribe((response) => {
        this.fetched = true;

        this.nextPageToken = response.nextPageToken
          ? response.nextPageToken
          : '';
        this.videos = this.videos.concat(response.items);
      });
  }
}
