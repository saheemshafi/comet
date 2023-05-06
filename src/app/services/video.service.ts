import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getYTHeaders } from '../headers/headers';
import { VideoApiResponse } from '../interfaces/video';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}
  isMiniplayerOpen: BehaviorSubject<boolean> = new BehaviorSubject(true);
  miniplayerVideoId: BehaviorSubject<string> = new BehaviorSubject('Vbgm_0goSGI');
  initializeMiniplayer(videoId:string) {
    if (!this.isMiniplayerOpen.getValue()) {
      this.miniplayerVideoId.next(videoId);
      this.isMiniplayerOpen.next(true);
    }
    else{
      this.miniplayerVideoId.next(videoId);
    }
  }

  getVideo(videoId: string): Observable<VideoApiResponse> {
    const params = new HttpParams()
      .append('part', 'snippet,statistics')
      .append('id', videoId);

    return this.http.get<VideoApiResponse>(`${environment.YTbaseUrl}/videos`, {
      headers: getYTHeaders(),
      params: params,
    });
  }
}
