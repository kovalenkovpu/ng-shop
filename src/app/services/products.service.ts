import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  getProduct(): Product {
    return new Product(0, 'Macbook Pro 15"', 1200, true, 'Description 1', ['AMD', 'DDR4', 'SSD'], [Category.Electronics, Category.Apple]);
  }

  getProducts(): Array<Product> {
    return [
      new Product(0, 'Macbook Pro 15"', 1200, true, 'Description 1', ['AMD', 'DDR4', 'SSD'], [Category.Electronics, Category.Apple]),
      new Product(1, 'HP ProBook 15"', 1000, true, 'Description 2', ['Intel', 'DDR4', 'HDD'], [Category.Electronics, Category.Devices]),
      new Product(2, 'DELL Inspiron 15"', 900, true, 'Description 3', ['AMD', 'DDR4', 'SSD'], [Category.Homestuff])
    ];
  }
}
