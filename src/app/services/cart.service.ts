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

        // todo: track the quantity on adding the purchase -> structure should be different
        /*
            purchases = {
                id: {
                    Product,
                    amount
                }
            };

         */
    }

    getAmount(): number {
        return this.purchases.length;
    }

    getQuantity(): number {
        return this.purchases.reduce((sum, item) => {
          return sum += item.price;
        }, 0);
    }

    clearCart() {
        this.purchases = [];
    }

    removePurchase(id): Array<Product> {
        return this.purchases = this.purchases.filter(purchase => purchase.id !== id);

        // return this.purchases;
    }
}
