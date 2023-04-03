import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  declarations: [],
  exports: [
    MatSidenavModule,
    MatButtonModule
  ]
})
export class PageCommonModule { }
