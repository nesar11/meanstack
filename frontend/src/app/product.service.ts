import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productUrl = "http://localhost:3001/api2/products";
  

  constructor(private http: HttpClient) { }
  getProducts(){
    return this.http.get<any>(this._productUrl)
  }

}
