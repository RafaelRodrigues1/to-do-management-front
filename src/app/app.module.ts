import { PageCommonModule } from './content/page-common.module';
import { ContentModule } from './content/content.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ContentModule,
    PageCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
