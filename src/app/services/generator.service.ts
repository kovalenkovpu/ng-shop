import { Injectable } from '@angular/core';
import { CoreModule } from '../core-module/core-module.module';

@Injectable({
    providedIn: CoreModule
})
export class GeneratorService {

    constructor() { }

    getRandomLiteral(n) {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < n; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }
}
