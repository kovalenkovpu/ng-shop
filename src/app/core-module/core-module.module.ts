import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService, ConfigOptionsService, ConstantsService, GeneratorService, GeneratorServiceFactory, Random_Literal } from '.';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [],
    providers: [
        /*LocalStorageService,
        ConfigOptionsService,
        ConstantsService,
        GeneratorService,*/
        // { provide: Random_Literal, useFactory:  GeneratorServiceFactory(3), deps: [ GeneratorService ] }
    ],
    declarations: []
})
export class CoreModule { }
