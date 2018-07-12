import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const Random_Literal = new InjectionToken<any[]>('RandomLiteral');

export function GeneratorServiceFactory(take: number) {

    return function(data: GeneratorService): string {
        return data.getRandomLiteral(take);
    };

}
