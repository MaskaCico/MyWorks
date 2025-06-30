import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Homepage } from './homepage/homepage';
import { NgxStarsModule } from 'ngx-stars';

@NgModule({
  declarations: [App, Header, Homepage],
  imports: [BrowserModule, AppRoutingModule, NgxStarsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
