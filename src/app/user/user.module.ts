import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { VideoViewComponent } from './pages/video-view/video-view.component';
import { VideosPageComponent } from './pages/videos-page/videos-page.component';
import { ChannelCardComponent } from './components/channel-card/channel-card.component';
import { PlaylistCardComponent } from './components/playlist-card/playlist-card.component';
import { ChannelPageComponent } from './pages/channel-page/channel-page.component';
import { ChannelVideosComponent } from './pages/channel-videos/channel-videos.component';
import { ChannelPlaylistsComponent } from './pages/channel-playlists/channel-playlists.component';
import { PlaylistPageComponent } from './pages/playlist-page/playlist-page.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MiniPlayerComponent } from './components/mini-player/mini-player.component';

@NgModule({
  declarations: [
    SidebarComponent,
    UserComponent,
    ContentComponent,
    VideoCardComponent,
    VideoViewComponent,
    VideosPageComponent,
    ChannelCardComponent,
    PlaylistCardComponent,
    ChannelPageComponent,
    ChannelVideosComponent,
    ChannelPlaylistsComponent,
    PlaylistPageComponent,
    MiniPlayerComponent,
  ],
  imports: [CommonModule, UserRoutingModule,InfiniteScrollModule],
})
export class UserModule {}
