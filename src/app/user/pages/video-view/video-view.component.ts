import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/interfaces/comments';
import { Item as Videos } from 'src/app/interfaces/search';
import { Item } from 'src/app/interfaces/video';
import { CommentsService } from 'src/app/services/comments.service';
import { SeoService } from 'src/app/services/seo.service';
import { SuggestionsService } from 'src/app/services/suggestions.service';
import { TranslationService } from 'src/app/services/translation.service';
import { VideoService } from 'src/app/services/video.service';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css'],
})
export class VideoViewComponent implements OnInit {
  videoId: string = '';
  video!: Item;
  videos: Videos[] = [];
  comments: Comment[] = [];
  isCommentsPopped: boolean = false;
  fetched: boolean = false;
  nextPageToken: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private videoService: VideoService,
    private recommendationService: SuggestionsService,
    private commentsSerive: CommentsService,
    public sanitizer: DomSanitizer,
    private router: Router,
    private meta: SeoService,
    private langService: TranslationService,
    private videosService: VideosService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.videoId = <string>params.get('videoId');
      if (!this.videoId) return;
      this.videoService.getVideo(this.videoId).subscribe((response) => {
        this.video = response.items[0];
        this.meta.updateMetaData(
          this.video.snippet.title,
          this.video.snippet.description,
          `https://comet-multimedia.up.railway.app${this.router.url}`,
          this.video.snippet.thumbnails.standard.url
        );
      });

      this.recommendationService
        .getVideos(this.videoId)
        .subscribe((response) => {
          this.fetched = true;
          this.nextPageToken = response.nextPageToken;
          this.videos = this.videosService.filterResponse(response.items);
        });

      this.commentsSerive.getComments(this.videoId).subscribe((response) => {
        if ('error' in response) {
          throw new Error(
            (response.error as { message: string }).message as string
          );
        } else {
          this.comments = response.items;
        }
      });
    });
  }

  fetchNextPage() {
    if (!this.nextPageToken) return;
    this.fetched = false;
    this.recommendationService
      .getNextPage(this.nextPageToken)
      .subscribe((response) => {
        this.fetched = true;
        this.nextPageToken = response.nextPageToken
          ? response.nextPageToken
          : '';
        this.videos = this.videos.concat(response.items);
      });
  }

  translate(e: Event, comment: string, commentWrapper: HTMLDivElement) {
    (e.target as HTMLButtonElement).insertAdjacentHTML(
      'afterbegin',
      `<i class="bx bx-loader-alt bx-spin bx-rotate-90 hidden"></i>`
    );
    this.langService.translate(comment).subscribe({
      next: (t) => {
        commentWrapper.children[0].innerHTML = t.translated_text;
        (e.target as HTMLButtonElement).children[0].remove();
      },
      error: (err) => {
        alert('Sorry not able to translate');
        (e.target as HTMLButtonElement).children[0].remove();
      },
    });
  }
}
