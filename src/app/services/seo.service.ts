import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor() {
    
  }

  updateMetaData(
    metaTags:HTMLMetaElement[],
    title: string,
    description: string,
    url: string,
    image:string
  ): void {
    document.title = title;
    if(Array.isArray(metaTags))
    metaTags.forEach((metaTag) => {
      switch (metaTag.name || metaTag.getAttribute('property')) {
        case 'title' || 'og:title':
          metaTag.content = title;
          break;
        case 'description' || 'og:description':
          metaTag.content = description;
          break;
        case 'og:url':
          metaTag.content = url;
          break;
        case 'og:image' || 'og:image:secure_url':
          metaTag.content = image;
          break;
      }
      console.log(metaTag.content)
    });
  }
}
