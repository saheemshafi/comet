import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelContentComponent } from './pages/channel-content/channel-content.component';
import { ChannelPageComponent } from './pages/channel-page/channel-page.component';
import { VideoViewComponent } from './pages/video-view/video-view.component';
import { VideosPageComponent } from './pages/videos-page/videos-page.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'videos/Coding', pathMatch: 'full' },
      { path: 'videos', redirectTo: 'videos/Coding' },
      { path: 'search', component: VideosPageComponent },
      { path: 'videos/:category', component: VideosPageComponent },
      { path: 'video/:videoId', component: VideoViewComponent },
      {
        path: 'channel/:channelId',
        component: ChannelPageComponent,
        children: [
          { path: '', redirectTo: 'uploads',pathMatch:'full' },
          {
            path: 'uploads',
            component: ChannelContentComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
