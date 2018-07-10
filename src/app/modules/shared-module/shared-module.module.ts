import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HightlightOnHoverDirective } from './hightlight-on-hover.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [HightlightOnHoverDirective],
    declarations: [HightlightOnHoverDirective]
})
export class SharedModuleModule { }
