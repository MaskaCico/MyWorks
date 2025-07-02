import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Homepage } from './homepage/homepage';
import { NgxStarsModule } from 'ngx-stars';
import { Search } from './search/search';
import { FormsModule } from '@angular/forms';
import { Tags } from './tags/tags';

@NgModule({
  declarations: [App, Header, Homepage, Search, Tags],
  imports: [BrowserModule, AppRoutingModule, NgxStarsModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
