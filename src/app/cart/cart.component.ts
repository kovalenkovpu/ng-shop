import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '../services/cart.service';
import { CommunicatorService } from '../services/communicator.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  purchases: Array<Product> = [];
  totalAmount = 0;
  totalQuantity = 0;

  constructor(public cartService: CartService, private communicatorService: CommunicatorService) { }

  ngOnInit() {
    this.purchases = this.cartService.getPurchaseList();

    this.sub = this.communicatorService.channel$.subscribe(
      (data) => {
        console.log(data);
        this.totalAmount = this.cartService.getAmount();
        this.totalQuantity = this.cartService.getQuantity();
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onClear() {
    this.cartService.clearCart();
    this.purchases = [];
    this.totalAmount = 0;
    this.totalQuantity = 0;
  }
}
