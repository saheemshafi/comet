import { Injectable } from '@angular/core';
import { LocalstorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { getTranslationHeaders } from '../headers/headers';
import { Observable, map, switchMap } from 'rxjs';
import { Detection, RootDetection } from '../interfaces/lang-detection';
import { RootTranslation, Translation } from '../interfaces/lang-translation';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private storage: LocalstorageService, private http: HttpClient) {}

  getPreference(): string | null {
    return this.storage.getItem('language-preference');
  }

  translate(text: string): Observable<Translation> {
    return this.detect(text).pipe(
      switchMap((detection) => {
        return this.http
          .post<RootTranslation>(
            `${environment.translationBaseUrl}`,
            new URLSearchParams({
              q: text,
              source: detection[0].language,
              target: this.getPreference() ?? 'en',
            }),
            { headers: getTranslationHeaders() }
          )
          .pipe(map((response) => {
            console.log(response)
            return response.data.translations[0]}));
      })
    );
  }

  private detect(text: string): Observable<Detection[]> {
    return this.http
      .post<RootDetection>(
        `${environment.translationBaseUrl}/detect`,
        new URLSearchParams({ q: text }),
        { headers: getTranslationHeaders() }
      )
      .pipe(map((response) => response.data.detections[0]));
  }
}
