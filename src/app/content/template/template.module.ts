import { PageCommonModule } from './../page-common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

@NgModule({
  imports: [
    CommonModule,
    PageCommonModule,

  ],
  declarations: [
    SideBarComponent,
    ToolBarComponent
  ],
  exports: [
    SideBarComponent,
    ToolBarComponent
  ]
})
export class TemplateModule { }
