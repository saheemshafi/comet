export interface CommentsApiResponse {
  items: Comment[];
  kind: string;
  nextPageToken: string;
  pageInfo: PageInfo;
}

export interface Comment {
  id: string;
  kind: ItemKind;
  snippet: ItemSnippet;
}

export enum ItemKind {
  YoutubeCommentThread = 'youtube#commentThread',
}

export interface ItemSnippet {
  canReply: boolean;
  isPublic: boolean;
  topLevelComment: TopLevelComment;
  totalReplyCount: number;
  videoId: VideoID;
}

export interface TopLevelComment {
  id: string;
  kind: TopLevelCommentKind;
  snippet: TopLevelCommentSnippet;
}

export enum TopLevelCommentKind {
  YoutubeComment = 'youtube#comment',
}

export interface TopLevelCommentSnippet {
  authorChannelId: AuthorChannelID;
  authorChannelUrl: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  canRate: boolean;
  likeCount: number;
  publishedAt: Date;
  textDisplay: string;
  textOriginal: string;
  updatedAt: Date;
  videoId: VideoID;
  viewerRating: ViewerRating;
}

export interface AuthorChannelID {
  value: string;
}

export enum VideoID {
  The0LhBvp8Qpro = '0LhBvp8qpro',
}

export enum ViewerRating {
  None = 'none',
}

export interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}
