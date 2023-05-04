import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getYTHeaders } from '../headers/headers';
import { ChannelApiResponse } from '../interfaces/channel';
import { SearchApiResponse } from '../interfaces/search';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  channelId: string = '';
  constructor(private http: HttpClient) {}
  getChannel(id: string): Observable<ChannelApiResponse> {
    const params = new HttpParams()
      .append('part', 'snippet,statistics')
      .append('id', id);

    return this.http.get<ChannelApiResponse>(
      `${environment.YTbaseUrl}/channels`,
      { headers: getYTHeaders(), params: params }
    );
  }
  getChannelVideos(id: string): Observable<SearchApiResponse> {
    this.channelId = id;
    const params = new HttpParams()
      .append('part', 'snippet,id')
      .append('channelId', this.channelId)
      .append('order', 'date')
      .append('maxResults', '50')
      .append('type', 'video');

    return this.http.get<SearchApiResponse>(`${environment.YTbaseUrl}/search`, {
      headers: getYTHeaders(),
      params: params,
    });
  }

  getMoreVideos(nextPageToken: string): Observable<SearchApiResponse> {
    const params = new HttpParams()
      .append('part', 'snippet,id')
      .append('channelId', this.channelId)
      .append('order', 'date')
      .append('maxResults', '50')
      .append('pageToken', nextPageToken)
      .append('type', 'video');

    return this.http.get<SearchApiResponse>(`${environment.YTbaseUrl}/search`, {
      headers: getYTHeaders(),
      params: params,
    });
  }

  getChannelPlaylists(id: string): Observable<SearchApiResponse> {
    const params = new HttpParams()
      .append('part', 'snippet,id')
      .append('channelId', id)
      .append('order', 'date')
      .append('maxResults', '50')
      .append('type', 'playlist');

    return this.http.get<SearchApiResponse>(`${environment.YTbaseUrl}/search`, {
      headers: getYTHeaders(),
      params: params,
    });
  }
}
