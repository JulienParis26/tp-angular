import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductsService} from "../../api/products.service";
import {CartService} from "../../api/cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList: any;

  // hovered = false;

  @Output() hoveringEvent = new EventEmitter<string>();

  constructor(private api: ProductsService, private cart: CartService) {
  }

  ngOnInit(): void {
    this.api.getProduct().subscribe(response => {
      // console.log(response);
      this.productList = response;

      this.productList.forEach((a: any) => {
        Object.assign(a, {quantity: 1, total: a.price})
      })
    })
  }

  // add to cart
  addToCart(item: any) {
    this.cart.addToCart(item);
    console.log(item);
  }

  // hovering(name: string, flag: boolean) {
  //   let event = JSON.stringify({item: name, flag: flag});
  //   this.hoveringEvent.emit(event);
  //   this.hovered = flag;
  // }


}
