import { RouterModule } from '@angular/router';
import { appRoutes, StatusModule } from './status/status.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmaCadastroModule } from './confirma-cadastro/confirma-cadastro.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    StatusModule,
    ConfirmaCadastroModule
  ],
  declarations: []
})
export class PagesModule { }
