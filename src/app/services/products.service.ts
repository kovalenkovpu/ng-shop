import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    getProduct(): Product {
        return new Product(0, 'Macbook Pro 15"', 1200, true, 'Description 1', ['AMD', 'DDR4', 'SSD'], [Category[0], Category[5]]);
    }

  /*getProducts(): Array<Product> {
    return [
      new Product(
          0,
          'Macbook Pro 15"',
          1200,
          true,
          'Description 1',
          ['AMD', 'DDR4', 'SSD'],
          [Category[0], Category[5], Category[4]]
      ),
      new Product(
          1,
          'HP ProBook 15"',
          1000,
          false,
          'Description 2',
          ['Intel', 'DDR4', 'HDD'],
          [Category[0], Category[1], Category[4]]
      ),
      new Product(
          2,
          'DELL Inspiron 15"',
          900,
          true,
          'Description 3',
          ['AMD', 'DDR4', 'SSD'],
          [Category[2], Category[4]]
          )
    ];
  }*/

    getProducts(): Promise<Array<Product>> {
        return new Promise(resolve => {
            setTimeout(() => resolve([
                new Product(
                    0,
                    'Macbook Pro 15"',
                    1200,
                    true,
                    'Description 1',
                    ['AMD', 'DDR4', 'SSD'],
                    [Category[0], Category[5], Category[4]]
                ),
                new Product(
                    1,
                    'HP ProBook 15"',
                    1000,
                    false,
                    'Description 2',
                    ['Intel', 'DDR4', 'HDD'],
                    [Category[0], Category[1], Category[4]]
                ),
                new Product(
                    2,
                    'DELL Inspiron 15"',
                    900,
                    true,
                    'Description 3',
                    ['AMD', 'DDR4', 'SSD'],
                    [Category[2], Category[4]]
                )
            ]), 3000);
        });
    }
}
