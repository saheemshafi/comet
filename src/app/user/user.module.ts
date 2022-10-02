import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { VideosComponent } from './components/videos/videos.component';

@NgModule({
  declarations: [UserComponent, SidebarComponent, VideosComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
