import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  purchases: Array<Product> = [];

  constructor() { }

  getPurchaseList(): Array<Product> {
    return this.purchases;
  }

  addPurchase(product): void {
    this.purchases.push(product);
  }

  getAmount(): number {
    return this.purchases.length;
  }

  getQuantity(): number {
    let acc = 0;

    acc = this.purchases.reduce((sum, item) => {
      return sum += item.price;
    }, 0);

    return acc;
  }

  clearCart() {
    this.purchases = [];
  }
}
