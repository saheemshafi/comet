import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/search';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css'],
})
export class VideoCardComponent implements OnInit {
  @Input() video!: Item | any;
  constructor(private videoService: VideoService) {}

  ngOnInit(): void {}
  openInMiniplayer(): void {
    this.videoService.initializeMiniplayer(
      this.video.id.videoId || this.video.snippet.resourceId.videoId
    );
  }
}
