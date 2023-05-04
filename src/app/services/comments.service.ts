import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getYTHeaders } from '../headers/headers';
import { CommentsApiResponse } from '../interfaces/comments';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}
  getComments(videoId: string): Observable<CommentsApiResponse> {
    const params = new HttpParams()
      .append('part', 'snippet')
      .append('videoId', videoId)
      .append('maxResults', '100');

    return this.http.get<CommentsApiResponse>(
      `${environment.YTbaseUrl}/commentThreads`,
      {
        headers: getYTHeaders(),
        params: params,
      }
    );
  }
}
