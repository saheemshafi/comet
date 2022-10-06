import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getHeaders } from '../headers/headers';
import { CommentsApiResponse } from '../interfaces/comments';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}
  getComments(videoId: string): Observable<CommentsApiResponse> {
    return this.http.get<CommentsApiResponse>(
      `${environment.baseUrl}/commentThreads?part=snippet&videoId=${videoId}&maxResults=100`,
      { headers: getHeaders() }
    );
  }
}
