import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HightlightOnHoverDirective } from './hightlight-on-hover.directive';
import { AddClickHostDirective } from './add-click-host.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [HightlightOnHoverDirective, AddClickHostDirective],
    declarations: [HightlightOnHoverDirective, AddClickHostDirective]
})
export class SharedModuleModule { }
