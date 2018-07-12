import { Component, Inject, OnInit, Optional } from '@angular/core';
import { GeneratorServiceFactory, Random_Literal } from '../../services/generator-service.factory';
import { GeneratorService } from '../../services/generator.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { ConstantsService } from '../../services/constants.service';

const appVersionInst = new ConstantsService();

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css'],
    providers: [
        { provide: ConstantsService, useValue: appVersionInst },
        { provide: Random_Literal, useFactory:  GeneratorServiceFactory(3), deps: [ GeneratorService ] }
    ]
})
export class ContactUsComponent implements OnInit {
    appObj: Object;

    constructor(
        @Inject(Random_Literal) private random_string: string,
        @Optional() private localStor: LocalStorageService,
        private appVersion: ConstantsService
    ) { }

    ngOnInit() {
        console.log('Randomly generated string of length 3: ', this.random_string);

        this.localStor.setItem('id', '0');
        console.log('Item from LocalStorage: ', this.localStor.getItem('id'));

        this.appObj = this.appVersion.getData();
    }
}
