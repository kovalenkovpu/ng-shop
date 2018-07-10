import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
    selector: 'app-product-component',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent {
    @Input() product: Product;
    @Output() addToCart = new EventEmitter<Product>();

    onAddToCart(): void {
        this.addToCart.emit(this.product);
    }
}
