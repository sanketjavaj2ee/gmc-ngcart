import {Component} from "@angular/core";
import {CartItem} from "../models/cart.model";
import {CartService} from "../services/cart.service";

@Component ({
  selector : "cart-items",
  templateUrl: "/cartitems.component.html"
})

export class CartitemsComponent {
  cartItems:CartItem[] = [];

  constructor(private cartService: CartService) {
    //let cartService = new CartService();

    this.cartItems = cartService.getCartItems();
  }

  removelItem(index: number) {
    this.cartService.removeCartItem(index);
  }

  totalAmount() {
    let total = 0;
    for(let item of this.cartItems) {
      total += item.price* item.qty;
    }
    return total;
  }

}
