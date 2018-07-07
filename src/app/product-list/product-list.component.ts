import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { CommunicatorService } from '../services/communicator.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  product: Product;
  products: Array<Product>;

  constructor(
      public productService: ProductsService,
      private cartService: CartService,
      private communicatorService: CommunicatorService
  ) {}

  onAddToCart(product: Product): void {
      this.cartService.addPurchase(product);
      this.communicatorService.publishData(product.id);
  }

  ngOnInit() {
    this.product = this.productService.getProduct();
    this.products = this.productService.getProducts();
  }

  ngAfterViewInit() {}
}
