
import {Product} from "../models/product.model";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class ProductService {
  private ProductsData: Product[];
  restUrl = "http://localhost:2403/gmproducts/";

  constructor(private http: Http) {
    this.ProductsData = [];
  }

  getProduct(id:String) {
      return this.http.get(this.restUrl+"/"+id);
  }

  getProducts() {

  /*this.ProductsData = [
      new Product('1', 'Galaxy s', 1000, "Samsung Galaxy"),
      new Product('2', 'Sony LED', 999, "Sony LED TV"),
      new Product('3', 'Micoramax Soundbox', 888, "Micromax uhu")
    ]*/
   this.http.get(this.restUrl).subscribe(
      (resp) => {
        console.log(resp.json())
        this.ProductsData = resp.json();
      },
      (err) => console.log(err)
    );

    return this.ProductsData;
  }

  addProduct(formProduct:Product, editIndex: number) {
    //if product i null, will return bad req
    this.http.post(this.restUrl, formProduct).subscribe(
      (resp) => {
        console.log("Saved");
        if(editIndex) {
          this.ProductsData[editIndex] = formProduct;//TODO:reflect back to component - working
        } else {
          console.log("push...................");
          this.ProductsData.push(resp.json());//TODO:reflect back to component - check
        }
      },
      (err) => {
        console.log("error");
        //return this.getProducts();
      }
    )

    return this.ProductsData;
  }

  deleteProduct(id: String, index:number) {
    this.http.delete(this.restUrl+"/"+id).subscribe(
      (resp) => {
        console.log("Deleted");
        this.ProductsData.splice(index, 1);//TOO:reflect back to component
      },
      (err) => {
        console.log("error");
      }
    )

    return this.ProductsData;
  }

}
