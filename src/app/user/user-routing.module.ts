import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './components/videos/videos.component';
import { VideoViewComponent } from './pages/video-view/video-view.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'videos/Coding', pathMatch: 'full' },
      { path: 'videos', redirectTo: 'videos/Coding' },
      { path: 'search', component: VideosComponent },
      { path: 'videos/:category', component: VideosComponent },
      { path: 'video/videoId', component: VideoViewComponent },
      { path: 'channel', component: VideosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
