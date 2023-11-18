import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, switchMap, take, takeUntil, tap } from 'rxjs';
import { Item } from 'src/app/interfaces/search';
import { SeoService } from 'src/app/services/seo.service';
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
    private meta: SeoService,
    private router: Router
  ) {}

  videos: Item[] = [];
  category: string | null = 'Coding';
  nextPageToken?: string;
  fetched: boolean = false;
  destroy$: Subject<void> = new Subject();
  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap((params) =>
          params.get('category')
            ? this.activatedRoute.paramMap
            : this.activatedRoute.queryParamMap
        ),
        tap({
          next: (params) => {
            const query = params.get('category') || params.get('q') || '';
            this.category = query;
            this.meta.updateMetaData(
              `Comet multimedia - ${query}`,
              `Browse ${query} videos on Comet multimedia.`,
              `https://comet-multimedia.up.railway.app${this.router.url}`,
              'https://comet-multimedia.up.railway.app/assets/images/comet-og-thumb.jpg'
            );
          },
        }),
        switchMap((params) =>
          this.videosService.getVideos(
            params.get('category') || params.get('q') || ''
          )
        )
      )
      .subscribe({
        next: (response) => {
          this.nextPageToken = response.nextPageToken;
          this.fetched = true;
          this.videos = this.videosService.filterResponse(response.items);
        },
        error: (error) => {
          error instanceof HttpErrorResponse &&
            console.log(`[HTTPERROR]: ${error.message}`);
          this.fetched = true;
        },
      });
  }

  fetchNextPage() {
    if (!this.nextPageToken) return;
    this.fetched = false;
    this.videosService
      .getNextPage(this.nextPageToken)
      .pipe(take(1))
      .subscribe((response) => {
        this.fetched = true;
        this.nextPageToken = response.nextPageToken
          ? response.nextPageToken
          : '';
        this.videos = this.videos.concat(
          this.videosService.filterResponse(response.items)
        );
      });
  }
}
