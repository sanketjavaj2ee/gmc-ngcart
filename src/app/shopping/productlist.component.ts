import {Component} from "@angular/core";
import {Product} from "../models/product.model";
import {ProductService} from "../services/product.service";
import {CartService} from "../services/cart.service";
import {CartItem} from "../models/cart.model";


@Component({
  selector: "product-list",
  templateUrl: "/productlist.component.html",
})

export class ProductlistComponent {
  products: Product[] = [];

  constructor(private cartService:CartService, private productService: ProductService) {
   /* this.products = [
      new Product(1, 'Galaxy s', 1000, "Samsung Galaxy"),
      new Product(1, 'Sony LED', 999, "Sony LED TV"),
      new Product(1, 'Micoramax Soundbox', 888, "Micromax uhu")
    ]*/

   //let productService = new ProductService();
   this.products = productService.getProducts();
  }

  addToCart(selectedProd: Product) {
    let selectedCartItem = new CartItem(selectedProd.name, selectedProd.price, 1);
    this.cartService.addCartItem(selectedCartItem);
  }

}
