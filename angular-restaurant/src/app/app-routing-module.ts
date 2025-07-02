import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';

const routes: Routes = [
  {
    path: '',
    component: Homepage,
  },
  { path: 'search/:searchTerm', component: Homepage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
