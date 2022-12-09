import { Component, OnInit } from '@angular/core';
import {CartService} from "../../api/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products!:any[]
  public grandTotal:number = 0;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getProduct().subscribe(response =>{
    this.products = response;
    this.grandTotal = this.cart.getTotalPrice();
    })
  }

  emptyCart(){
    this.cart.removeAllCart();
  }

  deleteCart(item: any){
    this.cart.removeCartItem(item)
  }
}
