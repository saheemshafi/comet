import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getHeaders } from '../headers/headers';
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

    return this.http
      .get<CommentsApiResponse>(`${environment.baseUrl}/commentThreads`, {
        headers: getHeaders(),
        params: params,
      })
      .pipe(
        map((comments) => {
          const modifiedComments = comments.items.map((comment) => {
            const urlifiedText = this.urlify(
              comment.snippet.topLevelComment.snippet.textOriginal
            );
            comment.snippet.topLevelComment.snippet.textOriginal = urlifiedText;
            return comment;
          });
          return { ...comments, items: modifiedComments };
        })
      );
  }

  urlify(text: string): string {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, (url) => `<a href="${url}">${url}</a>`);
  }
}
