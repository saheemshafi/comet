import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageInfo } from '../interfaces/page-info';

@Injectable({
  providedIn: 'root',
})
export class PageInfoService {
  constructor(private http: HttpClient) {}
  getInfo(): Observable<PageInfo[]> {
    return this.http.get<PageInfo[]>('../../../assets/data/page-info.json');
  }
}
