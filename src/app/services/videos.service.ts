import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getHeaders } from '../headers/headers';
import { SearchApiResponse } from '../interfaces/search';
@Injectable({
  providedIn: 'root',
})
export class VideosService {
  query: string = 'General';
  constructor(private http: HttpClient) {}
  getVideos(query: string = 'General'): Observable<SearchApiResponse> {
    this.query = query;
    let params = new HttpParams()
      .append('part', 'snippet')
      .append('q', this.query)
      .append('maxResults', '26');

    return this.http.get<SearchApiResponse>(`${environment.baseUrl}/search`, {
      headers: getHeaders(),
      params: params,
    });
  }
  getNextPage(nextPageToken: string = ''): Observable<SearchApiResponse> {
    let params = new HttpParams()
      .append('part', 'snippet')
      .append('q', this.query)
      .append('maxResults', '26')
      .append('pageToken', nextPageToken);

    return this.http.get<SearchApiResponse>(`${environment.baseUrl}/search`, {
      headers: getHeaders(),
      params: params,
    });
  }
}
