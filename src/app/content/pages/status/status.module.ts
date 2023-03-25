import { StatusComponent } from './status.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'status',
    component: StatusComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule
  ],
  declarations: [StatusComponent]
})
export class StatusModule { }
