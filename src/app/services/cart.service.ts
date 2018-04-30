import {CartItem} from "../models/cart.model";
import {Injectable} from "@angular/core";

@Injectable()
export class CartService {
  private cartItems: CartItem[];

  constructor() {
    this.cartItems = [];
  }

  getCartItems():CartItem[] {
    return this.cartItems;
  }

  addCartItem(newItem: CartItem) {
    this.cartItems.push(newItem);
  }

  removeCartItem(index: number) {
    this.cartItems.splice(index, 1);
  }

}
