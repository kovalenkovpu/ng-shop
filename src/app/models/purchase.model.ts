import { Product } from './product.model';

/**
  * Purchase Model
  */
export class Purchase {
  constructor(
    public id: number,
    public product: Product,
    public amount: number
  ) { }
}
