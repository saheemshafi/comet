import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Item } from 'src/app/interfaces/search';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.css'],
})
export class VideosPageComponent implements OnInit {
  constructor(
    private videosService: VideosService,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    private router: Router
  ) {}
  videos: Item[] = [];
  category: string | null = 'Coding';
  query: string | null = null;
  nextPageToken?: string;
  fetched: boolean = false;
  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Comet multimedia is a video streaming platform based on youtube api.Watch,search,browse and explore videos,channels and playlists and much more.',
    });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'http://comet-multimedia.vercel.app/assets/images/comet-og-thumb.jpg',
    });
    this.meta.updateTag({
      property: 'og:image:secure_url',
      content:
        'http://comet-multimedia.vercel.app/assets/images/comet-og-thumb.jpg',
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://comet-multimedia.vercel.app' + this.router.url,
    });
    if (AppComponent.isBrowser) {
      this.activatedRoute.paramMap.subscribe((params) => {
        this.category = <string>params.get('category');
        if (!this.category) return;
        this.getVideos();
      });
      this.activatedRoute.queryParams.subscribe((params) => {
        this.query = <string>params['q'];
        if (!this.query) return;
        this.getVideos();
      });
    }
  }
  getVideos(): void {
    this.meta.updateTag({
      property: 'og:title',
      content: `Comet multimedia - ${this.category || this.query}`,
    });
    this.title.setTitle(`Comet multimedia - ${this.category || this.query}`);
    this.meta.updateTag({
      name: 'title',
      content: `Comet multimedia - ${this.category || this.query}`,
    });
    this.videosService
      .getVideos(<string>(this.category || this.query))
      .subscribe((response) => {
        this.nextPageToken = response.nextPageToken;
        this.fetched = true;
        this.videos = this.filterResponse(response.items);
      });
  }
  filterResponse(videos: Item[]): Item[] {
    return videos.filter(
      (item) =>
        (item.id.videoId || item.id.channelId || item.id.playlistId) !==
        undefined
    );
  }
  fetchNextPage() {
    if (!this.nextPageToken) return;
    this.fetched = false;
    this.videosService.getNextPage(this.nextPageToken).subscribe((response) => {
      this.fetched = true;
      this.nextPageToken = response.nextPageToken ? response.nextPageToken : '';
      this.videos = this.videos.concat(this.filterResponse(response.items));
    });
  }
}
