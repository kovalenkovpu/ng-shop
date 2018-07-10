import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Purchase } from '../models/purchase.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    purchases: Array<Purchase> = [];

    constructor() { }

    getPurchaseList(): Array<Purchase> {
        return this.purchases;
    }

    addPurchase(product: Product): void {
        let added = false;

            this.purchases.forEach(purchase => {
                if (product.id === purchase.id) {
                    purchase.amount++;
                    added = true;
                }
            });

        if (!added) {
            this.purchases.push({
                id: product.id,
                product: product,
                amount: 1
            });
        }
    }

    getAmount(): number {
        let amount = 0;

            this.purchases.forEach(purchase => {
                amount += purchase.amount;
            });

        return amount;
    }

    getTotalPrice(): number {
        let totalPrice = 0;

            this.purchases.forEach(purchase => {
                const { price } = purchase.product;

                totalPrice = totalPrice + purchase.amount * price;
            });

        return totalPrice;
    }

    clearCart() {
        this.purchases = [];
    }

    removePurchase(id): Array<Purchase> {
        // removes all purchases for given id
        return this.purchases = this.purchases.filter(purchase => id !== purchase.id);
    }

    increaseAmount(id) {
        return this.purchases = this.purchases.map(purchase => {
            if (purchase.id === id) {
                purchase.amount++;
            }

            return purchase;
        });
    }

    decreaseAmount(id) {
        const res = [];

        this.purchases.forEach(purchase => {
            if (purchase.id === id) {
                if (purchase.amount > 1) {
                    purchase.amount = purchase.amount - 1;
                    res.push(purchase);
                }
            }
            if (purchase.id !== id) {
                res.push(purchase);
            }
        });

        this.purchases = res;

        return this.purchases;
    }
}
