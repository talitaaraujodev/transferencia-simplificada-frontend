import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [FooterComponent, SidebarComponent, MessageComponent],
  exports: [FooterComponent, SidebarComponent, MessageComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
