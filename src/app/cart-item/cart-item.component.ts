import {Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener} from '@angular/core';
import { Purchase } from '../models/purchase.model';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
    @Input() purchase: Purchase;
    @Output() deleteItem = new EventEmitter<Number>();
    @Output() increaseAmount = new EventEmitter<Number>();
    @Output() decreaseAmount = new EventEmitter<Number>();

    @HostBinding('class')
    attrClass = 'hovered-class';

    @HostListener('mouseenter', ['$event'])
    enter(event: Event) {
        console.log('mouseenter event on host element');
    }

    constructor() {}

    ngOnInit() {}

    onDelete(): void {
        this.deleteItem.emit(this.purchase.id);
    }

    onIncrease(): void {
        this.increaseAmount.emit(this.purchase.id);
    }

    onDecrease(): void {
        this.decreaseAmount.emit(this.purchase.id);
    }

    onMouseEnter($event) {
        console.log(`Entered mouse`);
        console.log($event.target);
    }
}
