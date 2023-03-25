import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  declarations: [],
  exports: [
    MatSidenavModule
  ]
})
export class PageCommonModule { }
