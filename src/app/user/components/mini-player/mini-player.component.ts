import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NEVER, Observable, catchError, map, take } from 'rxjs';
import { Item } from 'src/app/interfaces/video';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-mini-player',
  templateUrl: './mini-player.component.html',
  styleUrls: ['./mini-player.component.css'],
})
export class MiniPlayerComponent implements OnInit {
  video!: Observable<Item>;
  constructor(
    protected videoService: VideoService,
    protected sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.videoService.miniplayerVideoId.subscribe((videoId) => {
      if (!videoId.length) return;
      this.video = this.videoService.getVideo(videoId).pipe(
        map((video) => video.items[0]),
        catchError((err) => NEVER)
      );
    });
  }

  closeMiniplayer():void{
    this.videoService.isMiniplayerOpen.next(false);
    this.videoService.miniplayerVideoId.next('');
  }

}
