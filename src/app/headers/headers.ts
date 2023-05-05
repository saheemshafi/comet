import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export const getYTHeaders = () => {
  let headers = new HttpHeaders();
  headers = headers
    .set('X-RapidAPI-Key', environment.rapidApiKey)
    .set('X-RapidAPI-Host', environment.rapidApiYTHost);
  return headers;
};

export const getTranslationHeaders = () => {
  let headers = new HttpHeaders();
  headers = headers
    .set('X-RapidAPI-Key', environment.rapidApiKey)
    .set('X-RapidAPI-Host', environment.rapidApiTranslationHost)
    .set('content-type', 'application/x-www-form-urlencoded');
  return headers;
};
