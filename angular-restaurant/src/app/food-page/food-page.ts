import { Component, OnInit } from '@angular/core';
import { Food } from '../services/food/food';
import { Foods } from '../shared/models/Foods';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../services/cart/cart';

@Component({
  selector: 'app-food-page',
  standalone: false,
  templateUrl: './food-page.html',
  styleUrls: ['./food-page.css'],
})
export class FoodPage implements OnInit {
  food!: Foods;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: Food,
    private cartService: Cart,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = foodService.getFoodById(Number(params['id']));
      }
    });
  }

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
