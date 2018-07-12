import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { SharedModuleModule } from './shared-module/shared-module.module';
import { CartModule } from './cart-module/cart.module';
import { ProductsModule } from './products-module/products.module';
import { CoreModule } from './core-module/core-module.module';

@NgModule({
  declarations: [
      AppComponent,
  ],
  imports: [
      BrowserModule,
      ProductsModule,
      CartModule,
      CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
