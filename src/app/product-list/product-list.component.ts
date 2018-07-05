import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product: Product;
  products: Array<Product>;

  constructor(public productService: ProductsService) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
    this.products = this.productService.getProducts();
  }
}
