/// <reference path="./my-nav.d.ts" />
import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Base} from '../../../base';

@Component({
    moduleId: module.id,
    selector: 'my-nav',
    templateUrl: './my-nav.html',
    styleUrls: ['./style1.css', './style2.css']
})
export class MyNavComponent extends Base implements OnInit {
    static myNavStyles: ComponentStyle[] = [{
        type: 'style1',
        title: '样式1'
    }, {
            type: 'style2',
            title: '样式2'
        }];

    constructor(public router: Router) { super(router); }

    ngOnInit() { }

    @Input()
    nav: any;
    navMenuList: any;

    
    btnClass: string;

    innerHtml: string;

}