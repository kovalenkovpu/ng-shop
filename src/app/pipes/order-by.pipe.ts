import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

    transform(products: Array<Product>, value: string, order: boolean): Array<Object> {
        console.log(`call OrderBy pipe at ${Date.now()}`);
        console.log(products, value, order);

        if (!products) return [];

        if (value) {
            return products.sort((a: any, b: any) => {
                const value1 = a[value];
                const value2 = b[value];

                if (value1 > value2) {
                    return order ? 1 : -1;
                } else if (value1 < value2) {
                    return order ? -1 : 1;
                } else {
                    return 0;
                }
            });
        }

        return products;
    }

}
