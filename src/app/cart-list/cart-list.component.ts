import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '../services/cart.service';
import { CommunicatorService } from '../services/communicator.service';
import { Product } from '../models/product.model';

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    purchases: Array<Product> = [];
    totalAmount = 0;
    totalQuantity = 0;

    constructor(public cartService: CartService, private communicatorService: CommunicatorService) { }

    ngOnInit() {
        this.purchases = this.cartService.getPurchaseList();

        this.sub = this.communicatorService.channel$.subscribe(
            () => {
                    this.totalAmount = this.cartService.getQuantity();
                    this.totalQuantity = this.cartService.getAmount();
                    this.purchases = this.cartService.getPurchaseList();
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

    onDelete(id): void {
        this.purchases = this.cartService.removePurchase(id);
        this.totalAmount = this.cartService.getQuantity();
        this.totalQuantity = this.cartService.getAmount();
    }
}
