import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getHeaders } from '../headers/headers';
import { PlaylistDetailsApiResponse } from '../interfaces/playlist';
import { PlaylistItemsApiResponse } from '../interfaces/playlistItems';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  constructor(private http: HttpClient) {}

  getPlaylistDetails(id: string): Observable<PlaylistDetailsApiResponse> {
    const params = new HttpParams().append('part', 'snippet').append('id', id);

    return this.http.get<PlaylistDetailsApiResponse>(
      `${environment.baseUrl}/playlists`,
      {
        headers: getHeaders(),
        params: params,
      }
    );
  }

  getPlaylistVideos(id: string): Observable<PlaylistItemsApiResponse> {
    const params = new HttpParams()
      .append('part', 'snippet')
      .append('playlistId', id)
      .append('maxResults', '50');

    return this.http.get<PlaylistItemsApiResponse>(
      `${environment.baseUrl}/playlistItems`,
      {
        headers: getHeaders(),
        params: params,
      }
    );
  }
}
