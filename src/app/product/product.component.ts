import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { CommunicatorService } from '../services/communicator.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  @Input() product: Product;

  constructor(public cartService: CartService, private communicatorService: CommunicatorService) { }

  onBuy(product) {
    this.cartService.addPurchase(product);
    this.communicatorService.publishData(product.id);
  }
}
