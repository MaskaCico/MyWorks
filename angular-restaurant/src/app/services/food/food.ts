import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/Foods';

@Injectable({
  providedIn: 'root',
})
export class Food {
  constructor() {}

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Eggs Benedict',
        price: 6.99,
        cookTime: '10-20',
        favourite: false,
        origins: ['USA', 'Canada'],
        stars: 4.5,
        imageURL: 'assets/images/eggs benedict.jpg',
        tags: ['Breakfast', 'Lunch'],
      },
      {
        id: 2,
        name: 'Fries',
        price: 4.99,
        cookTime: '10-15',
        favourite: true,
        origins: ['Belgium'],
        stars: 4.8,
        imageURL: 'assets/images/fries.jpg',
        tags: ['Fastfood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Meatballs',
        price: 8.39,
        cookTime: '20-30',
        favourite: false,
        origins: ['Persia', 'middle-east', 'china'],
        stars: 4.2,
        imageURL: 'assets/images/meatballs.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 4,
        name: 'Pepperoni Pizza',
        price: 6.49,
        cookTime: '20-30',
        favourite: false,
        origins: ['Italy'],
        stars: 4.8,
        imageURL: 'assets/images/pepperoni pizza.jpg',
        tags: ['FastFood', 'Lunch'],
      },
      {
        id: 5,
        name: 'Salad',
        price: 2.99,
        cookTime: '2-5',
        favourite: true,
        origins: ['Greece', 'Rome'],
        stars: 4.1,
        imageURL: 'assets/images/salad.jpg',
        tags: ['Breakfast', 'Lunch', 'HealthyFood'],
      },
      {
        id: 6,
        name: 'Spagetti',
        price: 3.99,
        cookTime: '15-25',
        favourite: true,
        origins: ['Italy', 'Sicily'],
        stars: 4.7,
        imageURL: 'assets/images/spagetti.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
    ];
  }
}
