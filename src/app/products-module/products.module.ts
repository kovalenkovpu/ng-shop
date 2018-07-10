import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products.component';

@NgModule({
    imports: [
      CommonModule
    ],
    exports: [ProductsComponent],
    declarations: [ProductsComponent, ProductComponent, ProductListComponent]
})
export class ProductsModule { }
