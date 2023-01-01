export interface SearchApiResponse {
  items: Item[];
  kind: string;
  nextPageToken: string;
  pageInfo: PageInfo;
  regionCode: string;
}

export interface Item {
  id: ID;
  kind: ItemKind;
  snippet: Snippet;
}

export interface ID {
  channelId?: string;
  kind: IDKind;
  playlistId?: string;
  videoId?: string;
}

export enum IDKind {
  YoutubeChannel = 'youtube#channel',
  YoutubePlaylist = 'youtube#playlist',
  YoutubeVideo = 'youtube#video',
}

export enum ItemKind {
  YoutubeSearchResult = 'youtube#searchResult',
}

export interface Snippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: LiveBroadcastContent;
  publishTime: Date;
  publishedAt: Date;
  thumbnails: Thumbnails;
  title: string;
}

export enum LiveBroadcastContent {
  None = 'none',
}

export interface Thumbnails {
  default: Default;
  high: Default;
  medium: Default;
}

export interface Default {
  height?: number;
  url: string;
  width?: number;
}

export interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}
