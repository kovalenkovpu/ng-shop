import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { SharedModuleModule } from './modules/shared-module/shared-module.module';

@NgModule({
  declarations: [
      AppComponent,
      ProductComponent,
      ProductListComponent,
      CartListComponent,
      CartItemComponent,
  ],
  imports: [
      BrowserModule,
      SharedModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
