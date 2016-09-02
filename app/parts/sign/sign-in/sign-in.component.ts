import {Component, OnInit, ElementRef} from '@angular/core';
import {AppService} from '../../../app.service';
import * as jquery from 'jquery';

@Component({
    moduleId: module.id,
    selector: 'sign-in',
    templateUrl: './sign-in.html',
    viewProviders: [],
    styleUrls: ['./sign-in.css']
})
export class SignInComponent implements OnInit {
    constructor(private el: ElementRef, appService: AppService) { }
    ngOnInit() { }

    addTitle(title) {
        
    }

    hidePanel(panel) {
        $(panel).hide();
        $(this.el.nativeElement).find('.showPanelButton').click(() => {
            $(panel).show();
        });
    }
}

