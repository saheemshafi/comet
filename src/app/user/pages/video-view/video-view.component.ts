import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/interfaces/video';
import { Item as Videos } from 'src/app/interfaces/search';
import { SuggestionsService } from 'src/app/services/suggestions.service';
import { VideoService } from 'src/app/services/video.service';
import { CommentsService } from 'src/app/services/comments.service';
import { Comment } from 'src/app/interfaces/comments';
import { AppComponent } from 'src/app/app.component';

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
    private meta: Meta,
    private title: Title,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (AppComponent.isBrowser) {
      this.activatedRoute.paramMap.subscribe((params) => {
        this.videoId = <string>params.get('videoId');
        if (!this.videoId) return;
        this.videoService.getVideo(this.videoId).subscribe((response) => {
          this.video = response.items[0];
          this.title.setTitle(this.video.snippet.title);
          this.meta.updateTag({
            name: 'description',
            content: this.video.snippet.title,
          });
          this.meta.updateTag({
            name: 'title',
            content: this.video.snippet.title,
          });
          this.meta.updateTag({
            property: 'og:image',
            content: this.video.snippet.thumbnails.standard.url,
          });
          this.meta.updateTag({
            property: 'og:image:secure_url',
            content: this.video.snippet.thumbnails.standard.url,
          });
          this.meta.updateTag({
            property: 'og:title',
            content: this.video.snippet.title,
          });
          this.meta.updateTag({
            property: 'og:url',
            content: 'https://comet-multimedia.vercel.app' + this.router.url,
          });
        });

        this.recommendationService
          .getVideos(this.videoId)
          .subscribe((response) => {
            this.fetched = true;
            this.nextPageToken = response.nextPageToken;
            this.videos = response.items;
          });

        this.commentsSerive.getComments(this.videoId).subscribe((response) => {
          this.comments = response.items;
        });
      });
    }
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
}
