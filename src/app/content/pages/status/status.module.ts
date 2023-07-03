import { PageCommonModule } from './../../page-common.module';
import { StatusComponent } from './status.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { TemplateModule } from '../../template/template.module';

export const appRoutes: Routes = [
  {
    path: 'status',
    component: StatusComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule,
    PageCommonModule
  ],
  declarations: [StatusComponent]
})
export class StatusModule { }
