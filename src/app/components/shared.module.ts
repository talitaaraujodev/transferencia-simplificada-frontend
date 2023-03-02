import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [FooterComponent, SidebarComponent],
  exports: [FooterComponent, SidebarComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
