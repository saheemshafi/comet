import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/interfaces/search';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-videos-page',
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
        this.videos = response.items.filter(
          (item) =>
            (item.id.videoId || item.id.channelId || item.id.playlistId) !==
            undefined
        );
      });
  }
}
