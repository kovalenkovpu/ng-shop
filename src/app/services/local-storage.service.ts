import { Injectable } from '@angular/core';
import { CoreModule } from '../core-module/core-module.module';

@Injectable({
  providedIn: CoreModule
})
export class LocalStorageService {
    private localStorage = localStorage;

    constructor() { }

    setItem(key: string, item: string): void {
        this.localStorage.setItem(key, item);
    }

    getItem(key: string): string {
        return this.localStorage.getItem(key);
    }

    removeItem(key: string): void {
        this.localStorage.removeItem(key);
    }
}
