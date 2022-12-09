import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  // get method
  getProduct(){
    return this.http.get("http://localhost:3000/posts")
      .pipe(map((response : any) => {
        return response;
      }))
  }
}
