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
  constructor(private http: HttpClient) {}
  getVideos(query: string = 'General'): Observable<SearchApiResponse> {
    const params = new HttpParams()
      .append('part', 'snippet')
      .append('q', query)
      .append('maxResults', '100');

    return this.http.get<SearchApiResponse>(`${environment.baseUrl}/search`, {
      headers: getHeaders(),
      params: params,
    });
  }
}