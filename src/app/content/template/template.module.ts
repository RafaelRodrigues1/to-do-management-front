import { PageCommonModule } from './../page-common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  imports: [
    CommonModule,
    PageCommonModule,

  ],
  declarations: [
    SideBarComponent
  ],
  exports: [
    SideBarComponent
  ]
})
export class TemplateModule { }
