import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product.model";

@Component ({
  template: `
  <h3>Product details are
    <br>Name:{{dtProduct.name}}
    <br>Price: {{dtProduct.price}}
    <br>Description: {{dtProduct.desc}}
  </h3>
  <button class="btn btn-primary" (click)="goBack()">Back</button>
  `
})

export class DetailsComponent {
  dtProduct: Product = new Product("","", 0, "");

  constructor(private ar: ActivatedRoute, productService: ProductService, private router: Router) {
    let param = ar.snapshot.params["id"];
    console.log(param);

    productService.getProduct(param).subscribe((
        data)=> this.dtProduct = data.json(),
      (err) => console.log("ërror:"+err)
    );
  }

  goBack(){
    this.router.navigate(["/list"]);
  }

}
