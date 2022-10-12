import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private activatedRoute: ActivatedRoute
  ) {}
  videos: Item[] = [];
  category: string | null = 'Coding';
  query: string | null = null;
  nextPageToken?: string;
  fetched: boolean = false;
  ngOnInit(): void {
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
  getVideos(): void {
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
