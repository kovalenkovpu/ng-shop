import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import {SharedModuleModule} from '../shared-module/shared-module.module';

@NgModule({
  imports: [
      CommonModule,
      SharedModuleModule
  ],
    exports: [CartComponent],
    declarations: [CartComponent, CartListComponent, CartItemComponent]
})
export class CartModule { }
