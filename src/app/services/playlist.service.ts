import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getYTHeaders } from '../headers/headers';
import { PlaylistDetailsApiResponse } from '../interfaces/playlist';
import { PlaylistItemsApiResponse } from '../interfaces/playlistItems';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  playlistId: string = '';
  constructor(private http: HttpClient) {}

  getPlaylistDetails(id: string): Observable<PlaylistDetailsApiResponse> {
    const params = new HttpParams().append('part', 'snippet').append('id', id);

    return this.http.get<PlaylistDetailsApiResponse>(
      `${environment.YTbaseUrl}/playlists`,
      {
        headers: getYTHeaders(),
        params: params,
      }
    );
  }

  getPlaylistVideos(id: string): Observable<PlaylistItemsApiResponse> {
    this.playlistId = id;
    const params = new HttpParams()
      .append('part', 'snippet')
      .append('playlistId', this.playlistId)
      .append('maxResults', '26');

    return this.http.get<PlaylistItemsApiResponse>(
      `${environment.YTbaseUrl}/playlistItems`,
      {
        headers: getYTHeaders(),
        params: params,
      }
    );
  }

  getNextPage(
    nextPageToken: string = ''
  ): Observable<PlaylistItemsApiResponse> {
    let params = new HttpParams()
      .append('part', 'snippet')
      .append('playlistId', this.playlistId)
      .append('pageToken', nextPageToken)
      .append('maxResults', '26');

    return this.http.get<PlaylistItemsApiResponse>(
      `${environment.YTbaseUrl}/playlistItems`,
      {
        headers: getYTHeaders(),
        params: params,
      }
    );
  }
}
