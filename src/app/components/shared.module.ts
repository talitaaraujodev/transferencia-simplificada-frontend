import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [FooterComponent, SidebarComponent, MessageComponent, DashboardComponent],
  exports: [FooterComponent, SidebarComponent, MessageComponent, DashboardComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
