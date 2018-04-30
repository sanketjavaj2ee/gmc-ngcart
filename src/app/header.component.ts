import {Component} from "@angular/core";

@Component({
  selector:"app-header",
  template:`<nav class="navbar navbar-default">

    <div class="navbar-header">
      <a href="#" class="navbar-brand">
        {{cmpHeading}}
      </a>
    </div>
    
    <ul class="nav navbar-nav">
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/list">Shopping Cart</a></li>
      <li><a routerLink="/manageProducts">Manage Products</a></li>
    </ul>

  </nav>
  `
})
export class HeaderComponent{
  cmpHeading: String = "GlobalMart App";
}
