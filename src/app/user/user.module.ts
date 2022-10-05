import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { VideosComponent } from './components/videos/videos.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { VideoViewComponent } from './pages/video-view/video-view.component';

@NgModule({
  declarations: [UserComponent, SidebarComponent, VideosComponent, VideoCardComponent, VideoViewComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
