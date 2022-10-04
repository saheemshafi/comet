import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export const getHeaders = () => {
  let headers = new HttpHeaders();
  headers = headers
    .set('X-RapidAPI-Key', environment.rapidApiKey)
    .set('X-RapidAPI-Host', environment.rapidApiHost);
  return headers;
};
