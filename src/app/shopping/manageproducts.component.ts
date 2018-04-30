import {Component} from "@angular/core";
import {Product} from "../models/product.model";
import {ProductService} from "../services/product.service";
import {CartService} from "../services/cart.service";
import {CartItem} from "../models/cart.model";


@Component({
  selector: "manage-products",
  templateUrl: "/manage.product.html",
})

export class ManageProductsComponent {
  products: Product[] = [];
  formProduct: Product = new Product("","",0, "");
  editIndex: number;

  constructor(private productService: ProductService) {

   this.products = this.productService.getProducts();
  }

  saveProduct() {
    //next 4 line ..remove once reflects from backend
    /*if(this.editIndex) {
      this.products[this.editIndex] = this.formProduct;
    } else {
      this.products.push(this.formProduct)
    }*/

    this.products = this.productService.addProduct(this.formProduct, this.editIndex);
    if(this.editIndex) {
      this.editIndex = -1;
    }
    this.formProduct = new Product("","",0, "");
  }

  deleteProduct(id:String, index:number) {
    this.products = this.productService.deleteProduct(id, index);

  }

  editProduct(selectedProduct: Product, index:number){
    this.editIndex = index;
    Object.assign(this.formProduct, selectedProduct);//deep copying
  }

}
