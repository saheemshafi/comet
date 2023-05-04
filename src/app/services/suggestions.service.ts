import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getYTHeaders } from '../headers/headers';
import { SearchApiResponse } from '../interfaces/search';

@Injectable({
  providedIn: 'root',
})
export class SuggestionsService {
  videoId: string = '';
  constructor(private http: HttpClient) {}
  getVideos(videoId: string): Observable<SearchApiResponse> {
    this.videoId = videoId;
    const params = new HttpParams()
      .append('part', 'snippet')
      .append('type', 'video')
      .append('relatedToVideoId', this.videoId)
      .append('maxResults', '26');

    return this.http.get<SearchApiResponse>(`${environment.YTbaseUrl}/search`, {
      headers: getYTHeaders(),
      params: params,
    });
  }

  getNextPage(nextPageToken: string = ''): Observable<SearchApiResponse> {
    let params = new HttpParams()
      .append('part', 'snippet')
      .append('type', 'video')
      .append('relatedToVideoId', this.videoId)
      .append('maxResults', '26')
      .append('pageToken', nextPageToken);

    return this.http.get<SearchApiResponse>(`${environment.YTbaseUrl}/search`, {
      headers: getYTHeaders(),
      params: params,
    });
  }
}
