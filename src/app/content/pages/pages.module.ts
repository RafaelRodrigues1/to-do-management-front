import { RouterModule } from '@angular/router';
import { appRoutes, StatusModule } from './status/status.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    StatusModule
  ],
  declarations: []
})
export class PagesModule { }
