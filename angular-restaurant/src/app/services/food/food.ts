import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Food {
  constructor() {}

  getAll(): string[] {
    return [
      '/assets/images/eggs benedict.jpg',
      '/assets/images/fries.jpg',
      '/assets/images/meatballs.jpg',
      '/assets/images/pepperoni pizza.jpg',
      '/assets/images/salad.jpg',
      '/assets/images/spagetti.jpg',
    ];
  }
}
