export enum Category {
  Electronics,
  Devices,
  Homestuff,
  TV,
  PC,
  Apple
}

/**
  * Product Model
  */
export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public isAvailable: boolean,
    public description?: string,
    public specs?: Array<string>,
    public category?: Array<string>
  ) {
    this.name = name || 'No name';
    this.price = price || 0;
  }
}
