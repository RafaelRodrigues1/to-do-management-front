import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmaCadastroComponent } from './confirma-cadastro.component';
import { ConfirmacaoCadastroResolver } from '../../resolvers/UserResolver';

export const appRoutes: Routes = [
  {
    path: "confirma-cadastro/:registration",
    component: ConfirmaCadastroComponent,
    resolve: {
      user: ConfirmacaoCadastroResolver
    }
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule
  ],
  declarations: [ConfirmaCadastroComponent]
})
export class ConfirmaCadastroModule { }
