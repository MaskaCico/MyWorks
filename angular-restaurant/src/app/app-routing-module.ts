import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { FoodPage } from './food-page/food-page';

const routes: Routes = [
  {
    path: '',
    component: Homepage,
  },
  { path: 'search/:searchTerm', component: Homepage },
  { path: 'tag/:tag', component: Homepage },
  { path: 'food/:id', component: FoodPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
