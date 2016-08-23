import {Component, OnInit, ElementRef} from '@angular/core';

import {AppService} from '../../../app.service';

@Component({
    moduleId: module.id,
    selector: 'sign-in',
    templateUrl: './sign-in.html',
    viewProviders: [],
    styleUrls: ['./sign-in.css']
})
export class SignInComponent implements OnInit {
    constructor(private el: ElementRef, appService: AppService) {}

    
    ngOnInit() {}

    addTitle(title) {
        // this.appService
    }

    hidePanel(panel) {
        window['$'](panel).hide();
        window['$'](this.el).find('.showPanelButton').click(() => {
            window['$'](panel).show();
        });
    }
}

