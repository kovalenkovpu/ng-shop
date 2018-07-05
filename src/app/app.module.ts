import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';

import { ProductsService } from './services/products.service';
import { CartService } from './services/cart.service';
import { CommunicatorService } from './services/communicator.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductsService, CartService, CommunicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
