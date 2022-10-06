import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getHeaders } from '../headers/headers';
import { SearchApiResponse } from '../interfaces/search';

@Injectable({
  providedIn: 'root',
})
export class SuggestionsService {
  constructor(private http: HttpClient) {}
  getVideos(videoId: string): Observable<SearchApiResponse> {
    return this.http.get<SearchApiResponse>(
      `${environment.baseUrl}/search?relatedToVideoId=${videoId}&type=video&part=snippet&maxResults=50`,
      { headers: getHeaders() }
    );
  }
}
