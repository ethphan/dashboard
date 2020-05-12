import { DefaultComponent } from './default.component';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostComponent } from 'src/app/modules/post/post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    DefaultComponent, 
    DashboardComponent, 
    PostComponent],
  imports: [
    CommonModule, 
    RouterModule, 
    SharedModule, 
    MatSidenavModule,
    MatDividerModule
  ],
})
export class DefaultModule {}
