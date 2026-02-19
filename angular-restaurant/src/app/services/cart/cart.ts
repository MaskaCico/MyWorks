import { Injectable } from '@angular/core';
import { BuyCart } from '../../shared/models/BuyCart';
import { Foods } from '../../shared/models/Foods';
import { CartItem } from '../../shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  private cart: BuyCart = new BuyCart();

  addToCart(food: Foods): void {
    let cartItem = this.cart.items.find((item) => item.food.id === food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id != foodId);
  }

  changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart(): BuyCart {
    return this.cart;
  }
}
