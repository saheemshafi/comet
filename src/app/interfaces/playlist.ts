export interface PlaylistDetailsApiResponse {
  items: PlaylistDetails[];
  kind: string;
  pageInfo: PageInfo;
}

export interface PlaylistDetails {
  id: string;
  kind: string;
  snippet: Snippet;
}

export interface Snippet {
  channelId: string;
  channelTitle: string;
  description: string;
  localized: Localized;
  publishedAt: Date;
  thumbnails: Thumbnails;
  title: string;
}

export interface Localized {
  description: string;
  title: string;
}

export interface Thumbnails {
  default: Default;
  high: Default;
  maxres: Default;
  medium: Default;
  standard: Default;
}

export interface Default {
  height: number;
  url: string;
  width: number;
}

export interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}
