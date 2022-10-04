import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/search';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements OnInit {
  constructor(private videosService: VideosService) {}
  videos: Item[] = [];
  ngOnInit(): void {
    this.videosService.getVideos().subscribe((response) => {
      this.videos = response.items;
    });
  }
}
