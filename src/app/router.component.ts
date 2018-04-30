import {Component, Pipe, PipeTransform} from "@angular/core";
import {ProductService} from "./services/product.service";
import {Product} from "./models/product.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  template: `<h3> Welcome to my shop</h3>
        Date is {{myDate | date: "dd/MM/yyyy"}} <br>
        Price is {{price | currency: 'INR'| uppercase | reverseText}}
        <br>
        <!--<iframe [src]="trustUrl" width="75%" height="200"></iframe>-->
  `
})

export class HomeComponent {
  price = 10.00234;
  myDate = new Date();

  trustUrl;
  myVideoUrl = "https://www.youtube.com/embed/vxIj3JKEGvE";

  constructor(private ds: DomSanitizer) {
    this.trustUrl = this.ds.bypassSecurityTrustResourceUrl(this.myVideoUrl);
  }
}

@Component({
  template: `<div class="col-sm-6">
    <manage-products></manage-products>
  </div>`
})

export class ManageProducts {
  myProducts:Product[] = [];
  //formProduct: Product = new Product("","", 0, "");

  constructor(private prService: ProductService) {
    this.myProducts = this.prService.getProducts();
  }

}

@Component({
  template: `<div class="col-sm-6">\n
              <product-list></product-list>\n'
             </div>
              <br/><br/>
            <div class="col-sm-6 well">
              <cart-items></cart-items>
            </div>`
})

export class ListComponent {

}

@Component({
  template:`<h3>404 Page not available</h3>`
})

export class NotFoundComponent {

}
