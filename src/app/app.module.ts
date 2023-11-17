import {
  HttpClientModule,
  HttpInterceptorFn,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const httpInterceptorFn: HttpInterceptorFn = (req, next) => {

  if (req.url.startsWith('https://youtube-v31.p.rapidapi.com')) {
    console.log(`[${req.method.toUpperCase()}]: ${req.url}`);
  }
  
  return next(req);
};

@NgModule({
  declarations: [HeaderComponent, AppComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([httpInterceptorFn])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
