import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '../../services/cart.service';
import { CommunicatorService } from '../../services/communicator.service';
import { Purchase } from '../../models/purchase.model';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild(CartItemComponent)
    child: CartItemComponent;

    private sub: Subscription;
    purchases: Array<Purchase> = [];
    totalAmount = 0;
    totalQuantity = 0;

    constructor(public cartService: CartService, private communicatorService: CommunicatorService) { }

    ngOnInit() {
        this.purchases = this.cartService.getPurchaseList();

        this.sub = this.communicatorService.channel$.subscribe(
            () => {
                    this.totalAmount = this.cartService.getTotalPrice();
                    this.totalQuantity = this.cartService.getAmount();
                    this.purchases = this.cartService.getPurchaseList();
                }
            );
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    ngAfterViewInit() {
        console.log(`@ViewChild init, ${this.child}`);
    }

    onClear() {
        this.cartService.clearCart();
        this.purchases = [];
        this.totalAmount = 0;
        this.totalQuantity = 0;
    }

    onDelete(id): void {
        this.purchases = this.cartService.removePurchase(id);
        this.totalAmount = this.cartService.getTotalPrice();
        this.totalQuantity = this.cartService.getAmount();
    }

    onIncrease(id): void {
        this.purchases = this.cartService.increaseAmount(id);
        this.totalAmount = this.cartService.getTotalPrice();
        this.totalQuantity = this.cartService.getAmount();
    }

    onDecrease(id): void {
        this.purchases = this.cartService.decreaseAmount(id);
        this.totalAmount = this.cartService.getTotalPrice();
        this.totalQuantity = this.cartService.getAmount();
    }
}
