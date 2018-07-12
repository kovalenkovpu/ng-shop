import { Injectable } from '@angular/core';
import { CoreModule } from '../core-module/core-module.module';

@Injectable({
    providedIn: CoreModule
})
export class ConstantsService {
    private data: Object = { App: 'TaskManager', Ver: '1.0' };

    constructor() { }

    getData() {
        return this.data;
    }
}
