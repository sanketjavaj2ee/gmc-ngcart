import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header.component";
import {ShoppingModule} from "./shopping/shopping.module";
import {CartService} from "./services/cart.service";
import {ProductService} from "./services/product.service";
import {HomeComponent, ListComponent, ManageProducts, NotFoundComponent} from "./router.component";
import {RouterModule} from "@angular/router";
import {ManageProductsComponent} from "./shopping/manageproducts.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {ReversePipe} from "./app.pipe";

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, HomeComponent, ManageProductsComponent, ListComponent, NotFoundComponent, ReversePipe
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ShoppingModule, RouterModule.forRoot([{path: "", component: HomeComponent}, {path: "manageProducts", component: ManageProductsComponent},
      {path: "list", component: ListComponent}, {path: "**", component: NotFoundComponent}])
  ],
  providers: [CartService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
