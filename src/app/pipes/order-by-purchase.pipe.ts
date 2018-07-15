import { Pipe, PipeTransform } from '@angular/core';
import { Purchase } from '../models/purchase.model';

@Pipe({
  name: 'orderByPurchase'
})
export class OrderByPurchasePipe implements PipeTransform {

    transform(purchases: Array<Purchase>, value: string, order: boolean): Array<Object> {
        console.log(`call OrderByPurchase pipe at ${Date.now()}`);
        console.log(purchases, value, order);

        if (!purchases) return [];

        if (value && value === 'amount') {
            return purchases.sort((a: any, b: any) => {
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
        } else if (value) {
            return purchases.sort((a: any, b: any) => {
                const value1 = a.product[value];
                const value2 = b.product[value];

                if (value1 > value2) {
                    return order ? 1 : -1;
                } else if (value1 < value2) {
                    return order ? -1 : 1;
                } else {
                    return 0;
                }
            });
        }

        return purchases;
    }

}
