import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getHeaders } from '../headers/headers';
import { VideoApiResponse } from '../interfaces/video';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}

  getVideo(videoId: string): Observable<VideoApiResponse> {
    return this.http.get<VideoApiResponse>(
      `${environment.baseUrl}/videos?part=snippet,statistics&id=${videoId}`,
      { headers: getHeaders() }
    );
  }
}
