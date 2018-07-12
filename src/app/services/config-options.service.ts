import { Injectable } from '@angular/core';
import { Options } from '../models/options.model';
import { CoreModule } from '../core-module/core-module.module';

@Injectable({
  providedIn: CoreModule
})
export class ConfigOptionsService {
    private options: Options;

    constructor() { }

    setOptions(config): void {
        this.options = {...config};
    }

    getOptions(): Options {
        return this.options;
    }

    setId(id): void {
        this.options.id = id;
    }

    getId(): number {
        return this.options.id;
    }

    setLogin(login): void {
        this.options.login = login;
    }

    getLogin(): string {
        return this.options.login;
    }

    setEmail(email): void {
        this.options.email = email;
    }

    getEmail(): string {
        return this.options.email;
    }

    setName(name): void {
        this.options.email = name;
    }

    getName(): string {
        return this.options.name;
    }

    setPassword(pass): void {
        this.options.password = pass;
    }
}
