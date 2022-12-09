import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productList = new BehaviorSubject<any>([])
  public cartItemList: any = []

  constructor() {}

  // get product
  getProduct() {
    return this.productList.asObservable();
  }

  // add to cart
  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  // total price
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
      // console.log(grandTotal);
    })
    return grandTotal;
  }


  // empty or delete all
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id)
        this.cartItemList.splice(index, 1)
    })
    this.productList.next(this.cartItemList);
  }
}
