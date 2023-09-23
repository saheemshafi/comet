import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private documentTitle: Title, private meta: Meta) {}

  updateMetaData(
    title: string,
    description: string,
    url: string,
    image: string
  ): void {
    this.documentTitle.setTitle(title);
    this.meta.updateTag({
      name: 'title',
      content: title,
    });
    this.meta.updateTag({
      name: 'description',
      content: description,
    });
    this.meta.updateTag({
      name: 'description',
      content: description,
    });
    this.meta.updateTag({
      property: 'og:title',
      content: title,
    });
    this.meta.updateTag({
      property: 'og:description',
      content: title,
    });
    this.meta.updateTag({
      property: 'og:url',
      content: url,
    });
    this.meta.updateTag({
      property: 'og:image',
      content: image,
    });
    this.meta.updateTag({
      property: 'og:image:secure_url',
      content: image,
    });
  }
}
