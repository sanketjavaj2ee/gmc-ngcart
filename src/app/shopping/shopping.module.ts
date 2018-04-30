import {NgModule} from "@angular/core";
import {ProductlistComponent} from "./productlist.component";
import {CartitemsComponent} from "./cartitems.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ManageProducts} from "../router.component";
import {ManageProductsComponent} from "./manageproducts.component";
import {DetailsComponent} from "./details.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [ProductlistComponent, CartitemsComponent, DetailsComponent],
  exports: [ProductlistComponent, CartitemsComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild([{path: "details/:id", component:DetailsComponent}]) ]
})

export class ShoppingModule {

}
