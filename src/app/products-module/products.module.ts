import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from '../shared-module/shared-module.module';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModuleModule,
    ],
    exports: [ProductsComponent],
    declarations: [ProductsComponent, ProductComponent, ProductListComponent, ContactUsComponent]
})
export class ProductsModule { }
