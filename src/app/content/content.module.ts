import { SideBarComponent } from './template/side-bar/side-bar.component';
import { TemplateModule } from './template/template.module';
import { PagesModule } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './template/tool-bar/tool-bar.component';

@NgModule({
  imports: [
    CommonModule,
    PagesModule,
    TemplateModule
  ],
  declarations: [

  ],
  exports: [
    SideBarComponent,
    ToolBarComponent
  ]
})
export class ContentModule { }
