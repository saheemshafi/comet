import { Injectable } from '@angular/core';
import { LocalstorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { getTranslationHeaders } from '../headers/headers';
import { Observable, map, switchMap } from 'rxjs';
import { Detection } from '../interfaces/lang-detection';
import { LanguageCode, Translation } from '../interfaces/lang-translation';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private storage: LocalstorageService, private http: HttpClient) {}

  getPreference(): string | null {
    return this.storage.getItem('language-preference');
  }

  getLanguages(): Observable<LanguageCode[]> {
    return this.http.get<LanguageCode[]>('/assets/data/supported-languages.json');
  }

  translate(text: string): Observable<Translation> {
    return this.detect(text).pipe(
      switchMap((detection) => {
        return this.http.post<Translation>(
          `${environment.translationBaseUrl}/translate`,
          new URLSearchParams({
            text: text,
            from: detection.lang,
            to: this.getPreference() ?? 'en',
          }),
          { headers: getTranslationHeaders() }
        );
      })
    );
  }

  private detect(text: string): Observable<Detection> {
    return this.http.get<Detection>(
      `${environment.translationBaseUrl}/detect?text=${text}`,
      {
        headers: getTranslationHeaders(),
      }
    );
  }
}
