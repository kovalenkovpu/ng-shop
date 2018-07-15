import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HightlightOnHoverDirective } from './hightlight-on-hover.directive';
import { AddClickHostDirective } from './add-click-host.directive';
import { OrderByPipe } from '../pipes/order-by.pipe';
import {OrderByPurchasePipe} from '../pipes/order-by-purchase.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [HightlightOnHoverDirective, AddClickHostDirective, OrderByPipe, OrderByPurchasePipe],
    declarations: [HightlightOnHoverDirective, AddClickHostDirective, OrderByPipe, OrderByPurchasePipe]
})
export class SharedModuleModule { }
